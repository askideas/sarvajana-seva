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
      
      // Check if user exists in database
      await handleUserData(user);
      
      return { success: true, user };
    } catch (error) {
      console.error('Google sign-in error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Handle user data storage
  const handleUserData = async (firebaseUser) => {
    try {
      const userRef = doc(db, 'Users', firebaseUser.email);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        // Existing user
        console.log('Existing user found');
        const userData = userSnap.data();
        setUser({
          ...firebaseUser,
          ...userData,
          isExisting: true
        });
      } else {
        // New user - ask for mobile number
        console.log('New user - asking for mobile number');
        setPendingUser(firebaseUser);
        setShowMobileModal(true);
      }
    } catch (error) {
      console.error('Error handling user data:', error);
    }
  };

  // Save new user data with mobile number
  const saveNewUserData = async (mobileNumber) => {
    try {
      if (!pendingUser) return { success: false, error: 'No pending user data' };
      
      const userData = {
        email: pendingUser.email,
        fullName: pendingUser.displayName || '',
        mobileNumber: mobileNumber,
        photoURL: pendingUser.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      };
      
      // Save to Firestore with email as document ID
      const userRef = doc(db, 'Users', pendingUser.email);
      await setDoc(userRef, userData);
      
      console.log('New user data saved successfully');
      
      // Update user state
      setUser({
        ...pendingUser,
        ...userData,
        isExisting: false
      });
      
      // Clear pending state
      setPendingUser(null);
      setShowMobileModal(false);
      
      return { success: true };
    } catch (error) {
      console.error('Error saving user data:', error);
      return { success: false, error: error.message };
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