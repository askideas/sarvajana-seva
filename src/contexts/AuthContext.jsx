import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [pendingUser, setPendingUser] = useState(null);

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('Google sign-in successful:', user.email);
      
      // Don't call handleUserData here - let onAuthStateChanged handle it
      // This prevents duplicate calls
      
      return { success: true, user };
    } catch (error) {
      console.error('Google sign-in error:', error);
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Login was cancelled.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = 'Popup blocked. Please allow popups for this site.';
      }
      
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Handle user data storage
  const handleUserData = async (firebaseUser) => {
    try {
      console.log('handleUserData called for:', firebaseUser.email);
      const userRef = doc(db, 'Users', firebaseUser.email);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        // Existing user
        console.log('Existing user found:', userSnap.data());
        const userData = userSnap.data();
        setUser({
          ...firebaseUser,
          ...userData,
          isExisting: true
        });
      } else {
        // New user - ask for mobile number
        console.log('New user detected - showing mobile modal for:', firebaseUser.email);
        setPendingUser(firebaseUser);
        setShowMobileModal(true);
      }
    } catch (error) {
      console.error('Error handling user data:', error);
      // Still set basic user data even if database operation fails
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        isExisting: false
      });
    }
  };

  // Save new user data with mobile number
  const saveNewUserData = async (mobileNumber) => {
    try {
      console.log('saveNewUserData called with mobile:', mobileNumber);
      console.log('pendingUser:', pendingUser);
      
      if (!pendingUser) {
        console.error('No pending user data found');
        return { success: false, error: 'No pending user data found. Please try logging in again.' };
      }
      
      const userData = {
        email: pendingUser.email,
        fullName: pendingUser.displayName || '',
        mobileNumber: mobileNumber,
        photoURL: pendingUser.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      };
      
      console.log('Saving user data to Firestore:', userData);
      
      // Save to Firestore with email as document ID
      const userRef = doc(db, 'Users', pendingUser.email);
      await setDoc(userRef, userData);
      
      console.log('User data saved successfully to Firestore');
      
      // Update user state
      const newUser = {
        uid: pendingUser.uid,
        email: pendingUser.email,
        displayName: pendingUser.displayName,
        photoURL: pendingUser.photoURL,
        ...userData,
        isExisting: false
      };
      
      console.log('Setting user state:', newUser);
      setUser(newUser);
      
      // Clear pending state
      setPendingUser(null);
      setShowMobileModal(false);
      
      console.log('New user registration completed successfully');
      return { success: true };
    } catch (error) {
      console.error('Error saving user data:', error);
      return { success: false, error: `Failed to save user data: ${error.message}` };
    }
  };

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setPendingUser(null);
      setShowMobileModal(false);
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return { success: false, error: error.message };
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        await handleUserData(firebaseUser);
      } else {
        // User is signed out
        setUser(null);
        setPendingUser(null);
        setShowMobileModal(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    showMobileModal,
    setShowMobileModal,
    signInWithGoogle,
    logout,
    saveNewUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}