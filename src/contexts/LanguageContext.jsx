import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Language Context
const LanguageContext = createContext();

// Available languages
export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' }
];

// Translations object
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    poojas: 'Poojas',
    products: 'Products',
    donations: 'Donations',
    astrology: 'Astrology',
    contact: 'Contact',
    login: 'Login',
    language: 'Language',
    
    // Common phrases
    welcome: 'Welcome to Sarvajana Seva',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    donate: 'Donate',
    bookNow: 'Book Now',
    readMore: 'Read More',
    viewAll: 'View All',
    getStarted: 'Get Started',
    submit: 'Submit',
    send: 'Send',
    cancel: 'Cancel',
    close: 'Close',
    
    // Footer
    quickLinks: 'Quick Links',
    connectWithUs: 'Connect With Us',
    followUs: 'Follow Us',
    
    // Home page
    universalService: 'Universal Service for Spiritual Awakening',
    embracePath: 'Embrace the path of devotion through sacred rituals, divine guidance, and selfless service.',
    joinCommunity: 'Join us in creating a spiritually enriched community.',
    explorePoojas: 'Explore Poojas',
    makeDonation: 'Make Donation',
    sacredTradition: 'Sacred Tradition',
    sacredTraditionDesc: 'In the service of humanity lies the worship of the Divine. Through selfless action, we purify our hearts and awaken the light within.',
    
    // About page
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourValues: 'Our Values',
    missionDesc: 'To serve humanity through authentic spiritual practices, preserve ancient wisdom, and guide souls toward divine realization.',
    visionDesc: 'To create a world where spiritual wisdom guides daily life, where compassionate service heals suffering, and where divine consciousness awakens in every heart.',
    ourStory: 'Our Story',
    ourTeam: 'Our Team',
    
    // Poojas page
    sacredRituals: 'Sacred Rituals',
    poojaServices: 'Pooja Services',
    whyChooseUs: 'Why Choose Us',
    authenticTraditions: 'Authentic Traditions',
    experiencedPriests: 'Experienced Priests',
    comprehensiveServices: 'Comprehensive Services',
    duration: 'Duration',
    participants: 'Participants',
    price: 'Price',
    benefits: 'Benefits',
    includes: 'Includes',
    
    // Products page
    spiritualProducts: 'Spiritual Products',
    allProducts: 'All Products',
    pujaItems: 'Puja Items',
    spiritualAccessories: 'Spiritual Accessories',
    jewelry: 'Jewelry',
    aromatics: 'Aromatics',
    crystals: 'Crystals',
    sacredPlants: 'Sacred Plants',
    books: 'Books',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    
    // Donations page
    sacredDonations: 'Sacred Donations',
    chooseYourSeva: 'Choose Your Seva',
    makeDonationNow: 'Make Your Donation',
    donationAmount: 'Donation Amount',
    customAmount: 'Custom Amount',
    yourImpact: 'Your Impact in Action',
    
    // Astrology page
    astrologyServices: 'Astrology Services',
    divineGuidance: 'Divine Guidance',
    horoscope: 'Horoscope',
    palmistry: 'Palmistry',
    numerology: 'Numerology',
    vaastu: 'Vaastu Shastra',
    gemstoneConsultation: 'Gemstone Consultation',
    bookConsultation: 'Book Consultation',
    
    // Contact page
    contactUsTitle: 'Contact Us',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send Message',
    yourName: 'Your Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    generalInquiry: 'General Inquiry',
    poojaBooking: 'Pooja Booking',
    astrologyConsultation: 'Astrology Consultation',
    donationRelated: 'Donation Related',
    feedback: 'Feedback & Suggestions',
    
    // Sanskrit phrases
    sarvesukhino: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः',
    sarvesukinoTranslation: 'May all beings be happy, may all beings be healthy',
    
    // Values
    dharma: 'Dharma',
    ahimsa: 'Ahimsa',
    seva: 'Seva',
    moksha: 'Moksha',
    dharmaDesc: 'Living in accordance with cosmic law and righteousness',
    ahimsaDesc: 'Non-violence in thought, word, and action',
    sevaDesc: 'Selfless service to humanity and all living beings',
    mokshaDesc: 'Liberation through spiritual realization and devotion',
    
    // Home page - comprehensive
    experienceTheDivine: 'Experience the divine through authentic Vedic rituals performed by experienced priests with traditional procedures and sacred materials.',
    beginYourJourney: 'Begin Your Spiritual Journey Today',
    connectWithDivine: 'Connect with the divine through our authentic spiritual services and community guidance.',
    featuredServices: 'Featured Services',
    authenticVedicRituals: 'Authentic Vedic Rituals',
    spiritualConsultations: 'Spiritual Consultations',
    sacredProducts: 'Sacred Products',
    testimonials: 'What Our Community Says',
    testimonial1: 'The Ganesh Chaturthi celebration at Sarvajana Seva was absolutely divine. The priests were knowledgeable and the arrangements were perfect.',
    testimonial2: 'I found great peace and guidance through their astrology consultation. Highly recommend their authentic approach.',
    testimonial3: 'The spiritual products I purchased have brought positive energy to my home. Excellent quality and blessed items.',
    testimonialAuthor1: 'Priya Sharma',
    testimonialAuthor2: 'Rajesh Kumar',
    testimonialAuthor3: 'Meera Devi',
    testimonialLocation1: 'Mumbai, India',
    testimonialLocation2: 'Delhi, India',
    testimonialLocation3: 'Bangalore, India',
    
    // Service descriptions
    authenticVedicRitualsDesc: 'Traditional Hindu rituals performed with devotion and proper vedic procedures',
    divineGuidanceDesc: 'Seek divine guidance through ancient astrological wisdom',
    spiritualConsultationsDesc: 'Find peace and direction through spiritual guidance and support',
    
    // Common CTA and buttons
    exploreServices: 'Explore Services',
    getInTouch: 'Get in Touch',
    scheduleConsultation: 'Schedule Consultation',
    viewMore: 'View More',
    learnMore: 'Learn More',
    
    // Form elements
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    selectService: 'Select Service',
    yourMessage: 'Your Message',
    required: 'Required',
    optional: 'Optional'
  },
  
  te: {
    // Navigation
    home: 'హోమ్',
    about: 'మా గురించి',
    poojas: 'పూజలు',
    products: 'ఉత్పత్తులు',
    donations: 'దానాలు',
    astrology: 'జ్యోతిష్యం',
    contact: 'సంప్రదింపులు',
    login: 'లాగిన్',
    language: 'భాష',
    
    // Common phrases
    welcome: 'సర్వజన సేవకు స్వాగతం',
    learnMore: 'మరింత తెలుసుకోండి',
    contactUs: 'మాతో సంప్రదించండి',
    donate: 'దానం చేయండి',
    bookNow: 'ఇప్పుడే బుక్ చేయండి',
    readMore: 'మరింత చదవండి',
    viewAll: 'అన్నీ చూడండి',
    getStarted: 'ప్రారంభించండి',
    submit: 'సమర్పించండి',
    send: 'పంపండి',
    cancel: 'రద్దు చేయండి',
    close: 'మూసేయండి',
    
    // Footer
    quickLinks: 'త్వరిత లింకులు',
    connectWithUs: 'మాతో కనెక్ట్ అవ్వండి',
    followUs: 'మాను అనుసరించండి',
    
    // Home page
    universalService: 'ఆధ్యాత్మిక మేల్కొలుపు కోసం సార్వత్రిక సేవ',
    embracePath: 'పవిత్ర కర్మలు, దైవిక మార్గదర్శకత్వం మరియు నిస్వార్థ సేవ ద్వారా భక్తి మార్గాన్ని అనుసరించండి.',
    joinCommunity: 'ఆధ్యాత్మికంగా సమృద్ధిగా ఉన్న సమాజాన్ని సృష్టించడంలో మాతో చేరండి.',
    explorePoojas: 'పూజలను అన్వేషించండి',
    makeDonation: 'దానం చేయండి',
    sacredTradition: 'పవిత్ర సంప్రదాయం',
    sacredTraditionDesc: 'మానవత్వానికి సేవ చేయడంలో దైవ ఆరాధన ఉంది. నిస్వార్థ కర్మల ద్వారా మనం మన హృదయాలను పవిత్రం చేసుకుని లోపల వెలుగును మేల్కొలుపుతాము.',
    
    // About page
    ourMission: 'మా లక్ష్యం',
    ourVision: 'మా దృష్టి',
    ourValues: 'మా విలువలు',
    missionDesc: 'ప్రామాణిక ఆధ్యాత్మిక అభ్యాసాల ద్వారా మానవత్వానికి సేవ చేయడం, పురాతన జ్ఞానాన్ని కాపాడటం మరియు ఆత్మలను దైవిక సాక్షాత్కారం వైపు మార్గదర్శనం చేయడం.',
    visionDesc: 'ఆధ్యాత్మిక జ్ఞానం దైనందిన జీవితానికి మార్గదర్శకత్వం చేసే, కరుణతో కూడిన సేవ దుఃఖాన్ని నయం చేసే మరియు దైవిక చైతన్యం ప్రతి హృదయంలో మేల్కొలిచే ప్రపంచాన్ని సృష్టించడం.',
    ourStory: 'మా కథ',
    ourTeam: 'మా బృందం',
    
    // Poojas page
    sacredRituals: 'పవిత్ర కర్మలు',
    poojaServices: 'పూజా సేవలు',
    whyChooseUs: 'మాను ఎందుకు ఎంచుకోవాలి',
    authenticTraditions: 'ప్రామాణిక సంప్రదాయాలు',
    experiencedPriests: 'అనుభవజ్ఞులైన పూజారులు',
    comprehensiveServices: 'సమగ్ర సేవలు',
    duration: 'వ్యవధి',
    participants: 'పాల్గొనేవారు',
    price: 'ధర',
    benefits: 'లాభాలు',
    includes: 'కలిగి ఉంది',
    
    // Products page
    spiritualProducts: 'ఆధ్యాత్మిక ఉత్పత్తులు',
    allProducts: 'అన్ని ఉత్పత్తులు',
    pujaItems: 'పూజా వస్తువులు',
    spiritualAccessories: 'ఆధ్యాత్మిక ఉపకరణలు',
    jewelry: 'ఆభరణాలు',
    aromatics: 'సుగంధ వస్తువులు',
    crystals: 'స్ఫటికాలు',
    sacredPlants: 'పవిత్ర మొక్కలు',
    books: 'పుస్తకాలు',
    inStock: 'స్టాక్‌లో ఉంది',
    outOfStock: 'స్టాక్ అయిపోయింది',
    addToCart: 'కార్ట్‌కు జోడించండి',
    viewDetails: 'వివరాలు చూడండి',
    
    // Donations page
    sacredDonations: 'పవిత్ర దానాలు',
    chooseYourSeva: 'మీ సేవను ఎంచుకోండి',
    makeDonationNow: 'మీ దానం చేయండి',
    donationAmount: 'దానం మొత్తం',
    customAmount: 'కస్టమ్ మొత్తం',
    yourImpact: 'మీ ప్రభావం చర్యలో',
    
    // Astrology page
    astrologyServices: 'జ్యోతిష్య సేవలు',
    divineGuidance: 'దైవిక మార్గదర్శకత్వం',
    horoscope: 'జాతకం',
    palmistry: 'హస్తసాముద్రికం',
    numerology: 'సంఖ్యాశాస్త్రం',
    vaastu: 'వాస్తు శాస్త్రం',
    gemstoneConsultation: 'రత్న సలహా',
    bookConsultation: 'సలహా బుక్ చేయండి',
    
    // Contact page
    contactUsTitle: 'మాతో సంప్రదించండి',
    getInTouch: 'సంప్రదించండి',
    sendMessage: 'సందేశం పంపండి',
    yourName: 'మీ పేరు',
    emailAddress: 'ఇమెయిల్ చిరునామా',
    phoneNumber: 'ఫోన్ నంబర్',
    subject: 'విషయం',
    message: 'సందేశం',
    generalInquiry: 'సాధారణ విచారణ',
    poojaBooking: 'పూజా బుకింగ్',
    astrologyConsultation: 'జ్యోతిష్య సలహా',
    donationRelated: 'దానం సంబంధిత',
    feedback: 'అభిప్రాయం మరియు సూచనలు',
    
    // Sanskrit phrases
    sarvesukhino: 'సర్వే భవంతు సుఖినః సర్వే సంతు నిరామయాః',
    sarvesukinoTranslation: 'అందరూ సుఖంగా ఉండాలని, అందరూ ఆరోగ్యంగా ఉండాలని',
    
    // Values
    dharma: 'ధర్మం',
    ahimsa: 'అహింస',
    seva: 'సేవ',
    moksha: 'మోక్షం',
    dharmaDesc: 'విశ్వ నియమం మరియు ధర్మానికి అనుగుణంగా జీవించడం',
    ahimsaDesc: 'ఆలోచన, మాట మరియు చర్యలో అహింస',
    sevaDesc: 'మానవత్వం మరియు అన్ని జీవులకు నిస్వార్థ సేవ',
    mokshaDesc: 'ఆధ్యాత్మిక సాక్షాత్కారం మరియు భక్తి ద్వారా విముక్తి',
    
    // Home page - comprehensive
    experienceTheDivine: 'అనుభవజ్ఞులైన పూజారులు సంప్రదాయ విధానాలు మరియు పవిత్ర సామగ్రితో నిర్వహించే ప్రామాణిక వైదిక కర్మల ద్వారా దైవాన్ని అనుభవించండి.',
    beginYourJourney: 'ఈ రోజే మీ ఆధ్యాత్మిక యాత్రను ప్రారంభించండి',
    connectWithDivine: 'మా ప్రామాణిక ఆధ్యాత్మిక సేవలు మరియు సమాజ మార్గదర్శకత్వం ద్వారా దైవంతో కనెక్ట్ అవ్వండి.',
    featuredServices: 'ప్రధాన సేవలు',
    authenticVedicRituals: 'ప్రామాణిక వైదిక కర్మలు',
    spiritualConsultations: 'ఆధ్యాత్మిక సలహాలు',
    sacredProducts: 'పవిత్ర ఉత్పత్తులు',
    testimonials: 'మా సమాజం ఏమి చెబుతుంది',
    testimonial1: 'సర్వజన సేవలో గణేశ చతుర్థి వేడుకలు చాలా దివ్యంగా ఉన్నాయి. పూజారులు జ్ఞానవంతులు మరియు ఏర్పాట్లు ఖచ్చితంగా ఉన్నాయి.',
    testimonial2: 'వారి జ్యోతిష్య సలహా ద్వారా నేను గొప్ప శాంతి మరియు మార్గదర్శకత్వం పొందాను. వారి ప్రామాణిక విధానాన్ని అత్యంత సిఫార్సు చేస్తున్నాను.',
    testimonial3: 'నేను కొన్న ఆధ్యాత్మిక ఉత్పత్తులు నా ఇంటికి సానుకూల శక్తిని తెచ్చాయి. అద్భుతమైన నాణ్యత మరియు ఆశీర్వదించబడిన వస్తువులు.',
    testimonialAuthor1: 'ప్రియా శర్మ',
    testimonialAuthor2: 'రాజేష్ కుమార్',
    testimonialAuthor3: 'మీరా దేవి',
    testimonialLocation1: 'ముంబై, భారతదేశం',
    testimonialLocation2: 'ఢిల్లీ, భారతదేశం',
    testimonialLocation3: 'బెంగళూరు, భారతదేశం',
    
    // Service descriptions
    authenticVedicRitualsDesc: 'భక్తి మరియు సరైన వైదిక విధానాలతో నిర్వహించబడే సంప్రదాయ హిందూ కర్మలు',
    divineGuidanceDesc: 'పురాతన జ్యోతిష్య జ్ఞానం ద్వారా దైవిక మార్గదర్శకత్వం పొందండి',
    spiritualConsultationsDesc: 'ఆధ్యాత్మిక మార్గదర్శకత్వం మరియు మద్దతు ద్వారా శాంతి మరియు దిశను కనుగొనండి',
    
    // Common CTA and buttons
    exploreServices: 'సేవలను అన్వేషించండి',
    getInTouch: 'సంప్రదించండి',
    scheduleConsultation: 'సలహా షెడ్యూల్ చేయండి',
    viewMore: 'మరింత చూడండి',
    learnMore: 'మరింత తెలుసుకోండి',
    
    // Form elements
    name: 'పేరు',
    email: 'ఇమెయిల్',
    phone: 'ఫోన్',
    selectService: 'సేవను ఎంచుకోండి',
    yourMessage: 'మీ సందేశం',
    required: 'అవసరం',
    optional: 'ఐచ్ఛికం'
  },
  
  ta: {
    // Navigation
    home: 'முகப்பு',
    about: 'எங்களைப் பற்றி',
    poojas: 'பூஜைகள்',
    products: 'தயாரிப்புகள்',
    donations: 'நன்கொடைகள்',
    astrology: 'ஜோதிடம்',
    contact: 'தொடர்பு',
    login: 'உள்நுழைவு',
    language: 'மொழி',
    
    // Common phrases
    welcome: 'சர்வஜன சேவாவுக்கு வரவேற்கிறோம்',
    learnMore: 'மேலும் அறியவும்',
    contactUs: 'எங்களைத் தொடர்பு கொள்ளவும்',
    donate: 'தானம் செய்யுங்கள்',
    bookNow: 'இப்போது புக் செய்யுங்கள்',
    readMore: 'மேலும் படியுங்கள்',
    viewAll: 'அனைத்தையும் காணவும்',
    getStarted: 'தொடங்குங்கள்',
    submit: 'சமர்பிக்கவும்',
    send: 'அனுப்பவும்',
    cancel: 'ரத்து செய்யவும்',
    close: 'மூடவும்',
    
    // Footer
    quickLinks: 'விரைவு இணைப்புகள்',
    connectWithUs: 'எங்களுடன் இணையுங்கள்',
    followUs: 'எங்களைப் பின்பற்றவும்',
    
    // Home page
    universalService: 'ஆன்மீக விழிப்புணர்வுக்கான உலகளாவிய சேவை',
    embracePath: 'புனித சடங்குகள், தெய்வீக வழிகாட்டுதல் மற்றும் தன்னலமற்ற சேவை மூலம் பக்தியின் பாதையை ஏற்றுக்கொள்ளுங்கள்.',
    joinCommunity: 'ஆன்மீகமாக வளமான சமுதாயத்தை உருவாக்குவதில் எங்களுடன் சேருங்கள்.',
    explorePoojas: 'பூஜைகளை ஆராயுங்கள்',
    makeDonation: 'நன்கொடை அளியுங்கள்',
    sacredTradition: 'புனித மரபு',
    sacredTraditionDesc: 'மனிதகுலத்திற்கான சேவையில் இறைவனின் வழிபாடு உள்ளது. தன்னலமற்ற செயல்களின் மூலம், நாம் நம் இதயங்களை தூய்மைப்படுத்தி, உள்ளுறையும் ஒளியை விழிப்படுத்துகிறோம்.',
    
    // About page
    ourMission: 'எங்கள் நோக்கம்',
    ourVision: 'எங்கள் தொலைநோக்கு',
    ourValues: 'எங்கள் மதிப்புகள்',
    missionDesc: 'உண்மையான ஆன்மீக நடைமுறைகளின் மூலம் மனிதகுலத்திற்கு சேவை செய்வது, பழங்கால ஞானத்தை பாதுகாப்பது மற்றும் ஆத்மாக்களை தெய்வீக உணர்தலுக்கு வழிகாட்டுவது.',
    visionDesc: 'ஆன்மீக ஞானம் அன்றாட வாழ்க்கையை வழிகாட்டும், கருணையான சேவை துன்பத்தை குணப்படுத்தும் மற்றும் தெய்வீக உணர்வு ஒவ்வொரு இதயத்திலும் விழிக்கும் உலகத்தை உருவாக்குவது.',
    ourStory: 'எங்கள் கதை',
    ourTeam: 'எங்கள் குழு',
    
    // Poojas page
    sacredRituals: 'புனித சடங்குகள்',
    poojaServices: 'பூஜை சேவைகள்',
    whyChooseUs: 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
    authenticTraditions: 'உண்மையான மரபுகள்',
    experiencedPriests: 'அனுபவமிக்க பூசாரிகள்',
    comprehensiveServices: 'விரிவான சேவைகள்',
    duration: 'கால அளவு',
    participants: 'பங்கேற்பாளர்கள்',
    price: 'விலை',
    benefits: 'பலன்கள்',
    includes: 'உள்ளடக்கம்',
    
    // Products page
    spiritualProducts: 'ஆன்மீக தயாரிப்புகள்',
    allProducts: 'அனைத்து தயாரிப்புகள்',
    pujaItems: 'பூஜை பொருட்கள்',
    spiritualAccessories: 'ஆன்மீக துணைபொருட்கள்',
    jewelry: 'ஆபரணங்கள்',
    aromatics: 'நறுமண பொருட்கள்',
    crystals: 'படிகங்கள்',
    sacredPlants: 'புனித தாவரங்கள்',
    books: 'புத்தகங்கள்',
    inStock: 'கையிருப்பில் உள்ளது',
    outOfStock: 'கையிருப்பு இல்லை',
    addToCart: 'கார்ட்டில் சேர்க்கவும்',
    viewDetails: 'விவரங்களைக் காணவும்',
    
    // Donations page
    sacredDonations: 'புனித நன்கொடைகள்',
    chooseYourSeva: 'உங்கள் சேவையை தேர்வு செய்யுங்கள்',
    makeDonationNow: 'உங்கள் நன்கொடையை வழங்குங்கள்',
    donationAmount: 'நன்கொடை தொகை',
    customAmount: 'விரும்பிய தொகை',
    yourImpact: 'உங்கள் தாக்கம் செயலில்',
    
    // Astrology page
    astrologyServices: 'ஜோதிட சேவைகள்',
    divineGuidance: 'தெய்வீக வழிகாட்டுதல்',
    horoscope: 'ஜாதகம்',
    palmistry: 'கைரேகை',
    numerology: 'எண்ணியல்',
    vaastu: 'வாஸ்து சாஸ்திரம்',
    gemstoneConsultation: 'ரத்தின ஆலோசனை',
    bookConsultation: 'ஆலோசனை பதிவு செய்யுங்கள்',
    
    // Contact page
    contactUsTitle: 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
    getInTouch: 'தொடர்பில் இருங்கள்',
    sendMessage: 'செய்தி அனுப்பவும்',
    yourName: 'உங்கள் பெயர்',
    emailAddress: 'மின்னஞ்சல் முகவரி',
    phoneNumber: 'தொலைபேசி எண்',
    subject: 'விषயம்',
    message: 'செய்தி',
    generalInquiry: 'பொது விசாரணை',
    poojaBooking: 'பூஜை பதிவு',
    astrologyConsultation: 'ஜோதிட ஆலோசனை',
    donationRelated: 'நன்கொடை தொடர்பான',
    feedback: 'கருத்து மற்றும் பரிந்துரைகள்',
    
    // Sanskrit phrases
    sarvesukhino: 'ஸர்வே பவந்து ஸுகிந: ஸர்வே ஸந்து நிராமயா:',
    sarvesukinoTranslation: 'எல்லா உயிரினங்களும் மகிழ்ச்சியாக இருக்கட்டும், எல்லா உயிரினங்களும் ஆரோக்யமாக இருக்கட்டும்',
    
    // Values
    dharma: 'தர்மம்',
    ahimsa: 'அகிம்சை',
    seva: 'சேவை',
    moksha: 'மோக்ஷம்',
    dharmaDesc: 'அண்ட சட்டம் மற்றும் நீதியுணர்வுக்கு ஏற்ப வாழ்தல்',
    ahimsaDesc: 'சிந்தனை, சொல் மற்றும் செயலில் அகிம்சை',
    sevaDesc: 'மனிதகுலம் மற்றும் அனைத்து உயிரினங்களுக்கும் தன்னலமற்ற சேவை',
    mokshaDesc: 'ஆன்மீக உணர்தல் மற்றும் பக்தியின் மூலம் விடுதலை',
    
    // Home page - comprehensive
    experienceTheDivine: 'அனுபவமிக்க பூசாரிகள் பாரம்பரிய முறைகள் மற்றும் புனித பொருட்களுடன் நடத்தும் உண்மையான வேத சடங்குகளின் மூலம் தெய்வீகத்தை அனுபவியுங்கள்.',
    beginYourJourney: 'இன்றே உங்கள் ஆன்மீக பயணத்தைத் தொடங்குங்கள்',
    connectWithDivine: 'எங்களின் உண்மையான ஆன்மீக சேவைகள் மற்றும் சமுதாய வழிகாட்டுதலின் மூலம் தெய்வீகத்துடன் இணையுங்கள்.',
    featuredServices: 'சிறப்பு சேவைகள்',
    authenticVedicRituals: 'உண்மையான வேத சடங்குகள்',
    spiritualConsultations: 'ஆன்மீக ஆலோசனைகள்',
    sacredProducts: 'புனித தயாரிப்புகள்',
    testimonials: 'எங்கள் சமுதாயம் என்ன சொல்கிறது',
    testimonial1: 'சர்வஜன சேவாவில் கணேஷ் சதுர்த்தி கொண்டாட்டம் முற்றிலும் தெய்வீகமாக இருந்தது. பூசாரிகள் அறிவுள்ளவர்களாகவும் ஏற்பாடுகள் சரியாகவும் இருந்தன.',
    testimonial2: 'அவர்களின் ஜோதிட ஆலோசனையின் மூலம் நான் மிகுந்த அமைதியும் வழிகாட்டுதலும் பெற்றேன். அவர்களின் உண்மையான அணுகுமுறையை மிகவும் பரிந்துரைக்கிறேன்.',
    testimonial3: 'நான் வாங்கிய ஆன்மீக தயாரிப்புகள் எனது வீட்டிற்கு நேர்மறையான ஆற்றலைக் கொண்டு வந்துள்ளன. சிறந்த தரம் மற்றும் ஆசீர்வதிக்கப்பட்ட பொருட்கள்.',
    testimonialAuthor1: 'பிரியா சர்மா',
    testimonialAuthor2: 'ராஜேஷ் குமார்',
    testimonialAuthor3: 'மீரா தேவி',
    testimonialLocation1: 'மும்பை, இந்தியா',
    testimonialLocation2: 'தில்லி, இந்தியா',
    testimonialLocation3: 'பெங்களூர், இந்தியா',
    
    // Service descriptions
    authenticVedicRitualsDesc: 'பக்தி மற்றும் சரியான வேத முறைகளுடன் நடத்தப்படும் பாரம்பரிய இந்து சடங்குகள்',
    divineGuidanceDesc: 'பண்டைய ஜோதிட ஞானத்தின் மூலம் தெய்வீக வழிகாட்டுதலைப் பெறுங்கள்',
    spiritualConsultationsDesc: 'ஆன்மீக வழிகாட்டுதல் மற்றும் ஆதரவின் மூலம் அமைதியையும் திசையையும் கண்டறியுங்கள்',
    
    // Common CTA and buttons
    exploreServices: 'சேவைகளை ஆராயுங்கள்',
    getInTouch: 'தொடர்பில் இருங்கள்',
    scheduleConsultation: 'ஆலோசனை திட்டமிடுங்கள்',
    viewMore: 'மேலும் பார்க்கவும்',
    learnMore: 'மேலும் அறிய',
    
    // Form elements
    name: 'பெயர்',
    email: 'மின்னஞ்சல்',
    phone: 'தொலைபேசி',
    selectService: 'சேவையை தேர்ந்தெடுக்கவும்',
    yourMessage: 'உங்கள் செய்தி',
    required: 'தேவையான',
    optional: 'விருப்பமானது'
  },
  
  kn: {
    // Navigation
    home: 'ಮನೆ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    poojas: 'ಪೂಜೆಗಳು',
    products: 'ಉತ್ಪನ್ನಗಳು',
    donations: 'ದಾನಗಳು',
    astrology: 'ಜ್ಯೋತಿಷ್ಯ',
    contact: 'ಸಂಪರ್ಕ',
    login: 'ಲಾಗಿನ್',
    language: 'ಭಾಷೆ',
    
    // Common phrases
    welcome: 'ಸರ್ವಜನ ಸೇವಾಕ್ಕೆ ಸ್ವಾಗತ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    contactUs: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    donate: 'ದಾನ ಮಾಡಿ',
    bookNow: 'ಈಗಲೇ ಬುಕ್ ಮಾಡಿ',
    readMore: 'ಇನ್ನಷ್ಟು ಓದಿ',
    viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    submit: 'ಸಲ್ಲಿಸಿ',
    send: 'ಕಳುಹಿಸಿ',
    cancel: 'ರದ್ದುಮಾಡಿ',
    close: 'ಮುಚ್ಚಿ',
    
    // Footer
    quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    connectWithUs: 'ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ',
    followUs: 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    
    // Home page
    universalService: 'ಆಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿಗಾಗಿ ಸಾರ್ವತ್ರಿಕ ಸೇವೆ',
    embracePath: 'ಪವಿತ್ರ ಆಚರಣೆಗಳು, ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ನಿಸ್ವಾರ್ಥ ಸೇವೆಯ ಮೂಲಕ ಭಕ್ತಿಯ ಮಾರ್ಗವನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ.',
    joinCommunity: 'ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಸಮೃದ್ಧ ಸಮುದಾಯವನ್ನು ಸೃಷ್ಟಿಸುವಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ.',
    explorePoojas: 'ಪೂಜೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    makeDonation: 'ದಾನ ಮಾಡಿ',
    sacredTradition: 'ಪವಿತ್ರ ಸಂಪ್ರದಾಯ',
    sacredTraditionDesc: 'ಮಾನವೀಯತೆಯ ಸೇವೆಯಲ್ಲಿ ದಿವ್ಯನ ಆರಾಧನೆ ಇದೆ. ನಿಸ್ವಾರ್ಥ ಕ್ರಿಯೆಯ ಮೂಲಕ, ನಾವು ನಮ್ಮ ಹೃದಯಗಳನ್ನು ಶುದ್ಧೀಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಒಳಗಿನ ಬೆಳಕನ್ನು ಜಾಗೃತಗೊಳಿಸುತ್ತೇವೆ.',
    
    // About page
    ourMission: 'ನಮ್ಮ ಮಿಷನ್',
    ourVision: 'ನಮ್ಮ ದೃಷ್ಟಿಕೋನ',
    ourValues: 'ನಮ್ಮ ಮೌಲ್ಯಗಳು',
    missionDesc: 'ಪ್ರಾಮಾಣಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸಗಳ ಮೂಲಕ ಮಾನವೀಯತೆಗೆ ಸೇವೆ ಮಾಡುವುದು, ಪುರಾತನ ಬುದ್ಧಿವಂತಿಕೆಯನ್ನು ಸಂರಕ್ಷಿಸುವುದು ಮತ್ತು ಆತ್ಮಗಳನ್ನು ದೈವಿಕ ಸಾಕ್ಷಾತ್ಕಾರದ ಕಡೆಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡುವುದು.',
    visionDesc: 'ಆಧ್ಯಾತ್ಮಿಕ ಬುದ್ಧಿವಂತಿಕೆ ದೈನಂದಿನ ಜೀವನಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ, ಸಹಾನುಭೂತಿಯ ಸೇವೆ ದುಃಖವನ್ನು ಗುಣಪಡಿಸುವ ಮತ್ತು ದೈವಿಕ ಪ್ರಜ್ಞೆ ಪ್ರತಿಯೊಂದು ಹೃದಯದಲ್ಲಿ ಜಾಗೃತಗೊಳ್ಳುವ ಪ್ರಪಂಚವನ್ನು ಸೃಷ್ಟಿಸುವುದು.',
    ourStory: 'ನಮ್ಮ ಕಥೆ',
    ourTeam: 'ನಮ್ಮ ತಂಡ',
    
    // Poojas page
    sacredRituals: 'ಪವಿತ್ರ ಕ್ರಿಯೆಗಳು',
    poojaServices: 'ಪೂಜಾ ಸೇವೆಗಳು',
    whyChooseUs: 'ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು',
    authenticTraditions: 'ಪ್ರಾಮಾಣಿಕ ಸಂಪ್ರದಾಯಗಳು',
    experiencedPriests: 'ಅನುಭವಿ ಪುರೋಹಿತರು',
    comprehensiveServices: 'ಸಮಗ್ರ ಸೇವೆಗಳು',
    duration: 'ಅವಧಿ',
    participants: 'ಭಾಗವಹಿಸುವವರು',
    price: 'ಬೆಲೆ',
    benefits: 'ಪ್ರಯೋಜನಗಳು',
    includes: 'ಒಳಗೊಂಡಿರುವುದು',
    
    // Products page
    spiritualProducts: 'ಆಧ್ಯಾತ್ಮಿಕ ಉತ್ಪನ್ನಗಳು',
    allProducts: 'ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು',
    pujaItems: 'ಪೂಜಾ ವಸ್ತುಗಳು',
    spiritualAccessories: 'ಆಧ್ಯಾತ್ಮಿಕ ಉಪಕರಣಗಳು',
    jewelry: 'ಆಭರಣಗಳು',
    aromatics: 'ಸುಗಂಧ ವಸ್ತುಗಳು',
    crystals: 'ಸ್ಫಟಿಕಗಳು',
    sacredPlants: 'ಪವಿತ್ರ ಸಸ್ಯಗಳು',
    books: 'ಪುಸ್ತಕಗಳು',
    inStock: 'ಸ್ಟಾಕ್‌ನಲ್ಲಿದೆ',
    outOfStock: 'ಸ್ಟಾಕ್ ಮುಗಿದಿದೆ',
    addToCart: 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
    viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
    
    // Donations page
    sacredDonations: 'ಪವಿತ್ರ ದಾನಗಳು',
    chooseYourSeva: 'ನಿಮ್ಮ ಸೇವೆಯನ್ನು ಆರಿಸಿ',
    makeDonationNow: 'ನಿಮ್ಮ ದಾನ ಮಾಡಿ',
    donationAmount: 'ದಾನದ ಮೊತ್ತ',
    customAmount: 'ಕಸ್ಟಮ್ ಮೊತ್ತ',
    yourImpact: 'ನಿಮ್ಮ ಪ್ರಭಾವ ಕ್ರಿಯೆಯಲ್ಲಿ',
    
    // Astrology page
    astrologyServices: 'ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು',
    divineGuidance: 'ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ',
    horoscope: 'ಜಾತಕ',
    palmistry: 'ಹಸ್ತ ಸಾಮುದ್ರಿಕ',
    numerology: 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ',
    vaastu: 'ವಾಸ್ತು ಶಾಸ್ತ್ರ',
    gemstoneConsultation: 'ರತ್ನ ಸಲಹೆ',
    bookConsultation: 'ಸಲಹೆ ಬುಕ್ ಮಾಡಿ',
    
    // Contact page
    contactUsTitle: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    getInTouch: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    yourName: 'ನಿಮ್ಮ ಹೆಸರು',
    emailAddress: 'ಇಮೇಲ್ ವಿಳಾಸ',
    phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    subject: 'ವಿಷಯ',
    message: 'ಸಂದೇಶ',
    generalInquiry: 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ',
    poojaBooking: 'ಪೂಜಾ ಬುಕಿಂಗ್',
    astrologyConsultation: 'ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ',
    donationRelated: 'ದಾನ ಸಂಬಂಧಿತ',
    feedback: 'ಅಭಿಪ್ರಾಯ ಮತ್ತು ಸಲಹೆಗಳು',
    
    // Sanskrit phrases
    sarvesukhino: 'ಸರ್ವೇ ಭವಂತು ಸುಖಿನಃ ಸರ್ವೇ ಸಂತು ನಿರಾಮಯಾಃ',
    sarvesukinoTranslation: 'ಎಲ್ಲಾ ಜೀವಿಗಳು ಸುಖಿಯಾಗಿರಲಿ, ಎಲ್ಲಾ ಜೀವಿಗಳು ಆರೋಗ್ಯವಾಗಿರಲಿ',
    
    // Values
    dharma: 'ಧರ್ಮ',
    ahimsa: 'ಅಹಿಂಸೆ',
    seva: 'ಸೇವೆ',
    moksha: 'ಮೋಕ್ಷ',
    dharmaDesc: 'ಬ್ರಹ್ಮಾಂಡೀಯ ನಿಯಮ ಮತ್ತು ಸದಾಚಾರಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಜೀವಿಸುವುದು',
    ahimsaDesc: 'ಆಲೋಚನೆ, ಮಾತು ಮತ್ತು ಕ್ರಿಯೆಯಲ್ಲಿ ಅಹಿಂಸೆ',
    sevaDesc: 'ಮಾನವೀಯತೆ ಮತ್ತು ಎಲ್ಲಾ ಜೀವಿಗಳಿಗೆ ನಿಸ್ವಾರ್ಥ ಸೇವೆ',
    mokshaDesc: 'ಆಧ್ಯಾತ್ಮಿಕ ಸಾಕ್ಷಾತ್ಕಾರ ಮತ್ತು ಭಕ್ತಿಯ ಮೂಲಕ ವಿಮೋಚನೆ',
    
    // Home page - comprehensive
    experienceTheDivine: 'ಅನುಭವಿ ಪುರೋಹಿತರು ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನಗಳು ಮತ್ತು ಪವಿತ್ರ ವಸ್ತುಗಳೊಂದಿಗೆ ನಡೆಸುವ ಪ್ರಾಮಾಣಿಕ ವೈದಿಕ ಕ್ರಿಯೆಗಳ ಮೂಲಕ ದೈವಿಕತ್ವವನ್ನು ಅನುಭವಿಸಿ.',
    beginYourJourney: 'ಇಂದೇ ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಯಾತ್ರೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ',
    connectWithDivine: 'ನಮ್ಮ ಪ್ರಾಮಾಣಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಸೇವೆಗಳು ಮತ್ತು ಸಮುದಾಯ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ದೈವಿಕತ್ವದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ.',
    featuredServices: 'ಪ್ರಮುಖ ಸೇವೆಗಳು',
    authenticVedicRituals: 'ಪ್ರಾಮಾಣಿಕ ವೈದಿಕ ಕ್ರಿಯೆಗಳು',
    spiritualConsultations: 'ಆಧ್ಯಾತ್ಮಿಕ ಸಲಹೆಗಳು',
    sacredProducts: 'ಪವಿತ್ರ ಉತ್ಪನ್ನಗಳು',
    testimonials: 'ನಮ್ಮ ಸಮುದಾಯ ಏನು ಹೇಳುತ್ತದೆ',
    testimonial1: 'ಸರ್ವಜನ ಸೇವಾದಲ್ಲಿ ಗಣೇಶ ಚತುರ್ಥಿ ಆಚರಣೆ ಸಂಪೂರ್ಣವಾಗಿ ದಿವ್ಯವಾಗಿತ್ತು. ಪುರೋಹಿತರು ಜ್ಞಾನಿಗಳಾಗಿದ್ದರು ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳು ಪರಿಪೂರ್ಣವಾಗಿದ್ದವು.',
    testimonial2: 'ಅವರ ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆಯ ಮೂಲಕ ನಾನು ಅಪಾರ ಶಾಂತಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನವನ್ನು ಕಂಡುಕೊಂಡೆ. ಅವರ ಪ್ರಾಮಾಣಿಕ ವಿಧಾನವನ್ನು ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ.',
    testimonial3: 'ನಾನು ಖರೀದಿಸಿದ ಆಧ್ಯಾತ್ಮಿಕ ಉತ್ಪನ್ನಗಳು ನನ್ನ ಮನೆಗೆ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ತಂದಿವೆ. ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟ ಮತ್ತು ಆಶೀರ್ವದಿತ ವಸ್ತುಗಳು.',
    testimonialAuthor1: 'ಪ್ರಿಯಾ ಶರ್ಮಾ',
    testimonialAuthor2: 'ರಾಜೇಶ್ ಕುಮಾರ್',
    testimonialAuthor3: 'ಮೀರಾ ದೇವಿ',
    testimonialLocation1: 'ಮುಂಬೈ, ಭಾರತ',
    testimonialLocation2: 'ದೆಹಲಿ, ಭಾರತ',
    testimonialLocation3: 'ಬೆಂಗಳೂರು, ಭಾರತ',
    
    // Service descriptions
    authenticVedicRitualsDesc: 'ಭಕ್ತಿ ಮತ್ತು ಸರಿಯಾದ ವೈದಿಕ ವಿಧಾನಗಳೊಂದಿಗೆ ನಡೆಸಲಾಗುವ ಸಾಂಪ್ರದಾಯಿಕ ಹಿಂದೂ ಕ್ರಿಯೆಗಳು',
    divineGuidanceDesc: 'ಪ್ರಾಚೀನ ಜ್ಯೋತಿಷ್ಯ ಜ್ಞಾನದ ಮೂಲಕ ದೈವಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ',
    spiritualConsultationsDesc: 'ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲದ ಮೂಲಕ ಶಾಂತಿ ಮತ್ತು ದಿಕ್ಸೂಚಿಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
    
    // Common CTA and buttons
    exploreServices: 'ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    getInTouch: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    scheduleConsultation: 'ಸಲಹೆ ನಿಗದಿಪಡಿಸಿ',
    viewMore: 'ಇನ್ನಷ್ಟು ನೋಡಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ',
    
    // Form elements
    name: 'ಹೆಸರು',
    email: 'ಇಮೇಲ್',
    phone: 'ಫೋನ್',
    selectService: 'ಸೇವೆಯನ್ನು ಆರಿಸಿ',
    yourMessage: 'ನಿಮ್ಮ ಸಂದೇಶ',
    required: 'ಅಗತ್ಯ',
    optional: 'ಐಚ್ಛಿಕ'
  },
  
  hi: {
    // Navigation
    home: 'होम',
    about: 'हमारे बारे में',
    poojas: 'पूजाएं',
    products: 'उत्पाद',
    donations: 'दान',
    astrology: 'ज्योतिष',
    contact: 'संपर्क',
    login: 'लॉगिन',
    language: 'भाषा',
    
    // Common phrases
    welcome: 'सर्वजन सेवा में आपका स्वागत है',
    learnMore: 'और जानें',
    contactUs: 'हमसे संपर्क करें',
    donate: 'दान करें',
    bookNow: 'अभी बुक करें',
    readMore: 'और पढ़ें',
    viewAll: 'सभी देखें',
    getStarted: 'शुरू करें',
    submit: 'जमा करें',
    send: 'भेजें',
    cancel: 'रद्द करें',
    close: 'बंद करें',
    
    // Footer
    quickLinks: 'त्वरित लिंक',
    connectWithUs: 'हमसे जुड़ें',
    followUs: 'हमें फॉलो करें',
    
    // Home page
    universalService: 'आध्यात्मिक जागृति के लिए सार्वभौमिक सेवा',
    embracePath: 'पवित्र अनुष्ठानों, दिव्य मार्गदर्शन और निस्वार्थ सेवा के माध्यम से भक्ति के पथ को अपनाएं।',
    joinCommunity: 'आध्यात्मिक रूप से समृद्ध समुदाय बनाने में हमारे साथ जुड़ें।',
    explorePoojas: 'पूजाओं की खोज करें',
    makeDonation: 'दान करें',
    sacredTradition: 'पवित्र परंपरा',
    sacredTraditionDesc: 'मानवता की सेवा में दिव्य की आराधना निहित है। निस्वार्थ कर्म के माध्यम से, हम अपने हृदयों को शुद्ध करते हैं और भीतर के प्रकाश को जगाते हैं।',
    
    // About page
    ourMission: 'हमारा मिशन',
    ourVision: 'हमारी दृष्टि',
    ourValues: 'हमारे मूल्य',
    missionDesc: 'प्रामाणिक आध्यात्मिक प्रथाओं के माध्यम से मानवता की सेवा करना, प्राचीन ज्ञान को संरक्षित करना और आत्माओं को दिव्य साक्षात्कार की ओर मार्गदर्शन करना।',
    visionDesc: 'एक ऐसे संसार का निर्माण करना जहां आध्यात्मिक ज्ञान दैनिक जीवन का मार्गदर्शन करे, करुणामय सेवा दुख को ठीक करे, और दिव्य चेतना हर हृदय में जाग्रत हो।',
    ourStory: 'हमारी कहानी',
    ourTeam: 'हमारी टीम',
    
    // Poojas page
    sacredRituals: 'पवित्र अनुष्ठान',
    poojaServices: 'पूजा सेवाएं',
    whyChooseUs: 'हमें क्यों चुनें',
    authenticTraditions: 'प्रामाणिक परंपराएं',
    experiencedPriests: 'अनुभवी पुजारी',
    comprehensiveServices: 'व्यापक सेवाएं',
    duration: 'अवधि',
    participants: 'प्रतिभागी',
    price: 'मूल्य',
    benefits: 'लाभ',
    includes: 'शामिल है',
    
    // Products page
    spiritualProducts: 'आध्यात्मिक उत्पाद',
    allProducts: 'सभी उत्पाद',
    pujaItems: 'पूजा की वस्तुएं',
    spiritualAccessories: 'आध्यात्मिक सामान',
    jewelry: 'आभूषण',
    aromatics: 'सुगंधित वस्तुएं',
    crystals: 'क्रिस्टल',
    sacredPlants: 'पवित्र पौधे',
    books: 'पुस्तकें',
    inStock: 'स्टॉक में है',
    outOfStock: 'स्टॉक समाप्त',
    addToCart: 'कार्ट में जोड़ें',
    viewDetails: 'विवरण देखें',
    
    // Donations page
    sacredDonations: 'पवित्र दान',
    chooseYourSeva: 'अपनी सेवा चुनें',
    makeDonationNow: 'अपना दान करें',
    donationAmount: 'दान राशि',
    customAmount: 'कस्टम राशि',
    yourImpact: 'आपका प्रभाव कार्य में',
    
    // Astrology page
    astrologyServices: 'ज्योतिष सेवाएं',
    divineGuidance: 'दिव्य मार्गदर्शन',
    horoscope: 'राशिफल',
    palmistry: 'हस्तरेखा',
    numerology: 'अंकज्योतिष',
    vaastu: 'वास्तु शास्त्र',
    gemstoneConsultation: 'रत्न परामर्श',
    bookConsultation: 'परामर्श बुक करें',
    
    // Contact page
    contactUsTitle: 'हमसे संपर्क करें',
    getInTouch: 'संपर्क में रहें',
    sendMessage: 'संदेश भेजें',
    yourName: 'आपका नाम',
    emailAddress: 'ईमेल पता',
    phoneNumber: 'फोन नंबर',
    subject: 'विषय',
    message: 'संदेश',
    generalInquiry: 'सामान्य पूछताछ',
    poojaBooking: 'पूजा बुकिंग',
    astrologyConsultation: 'ज्योतिष परामर्श',
    donationRelated: 'दान संबंधित',
    feedback: 'प्रतिक्रिया और सुझाव',
    
    // Sanskrit phrases
    sarvesukhino: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः',
    sarvesukinoTranslation: 'सभी जीव सुखी हों, सभी जीव स्वस्थ हों',
    
    // Values
    dharma: 'धर्म',
    ahimsa: 'अहिंसा',
    seva: 'सेवा',
    moksha: 'मोक्ष',
    dharmaDesc: 'ब्रह्मांडीय नियम और धार्मिकता के अनुसार जीवन जीना',
    ahimsaDesc: 'विचार, वचन और कर्म में अहिंसा',
    sevaDesc: 'मानवता और सभी जीवों की निस्वार्थ सेवा',
    mokshaDesc: 'आध्यात्मिक साक्षात्कार और भक्ति के माध्यम से मुक्ति',
    
    // Home page - comprehensive
    experienceTheDivine: 'अनुभवी पुजारियों द्वारा पारंपरिक प्रक्रियाओं और पवित्र सामग्रियों के साथ किए जाने वाले प्रामाणिक वैदिक अनुष्ठानों के माध्यम से दिव्यता का अनुभव करें।',
    beginYourJourney: 'आज ही अपनी आध्यात्मिक यात्रा शुरू करें',
    connectWithDivine: 'हमारी प्रामाणिक आध्यात्मिक सेवाओं और समुदायिक मार्गदर्शन के माध्यम से दिव्यता के साथ जुड़ें।',
    featuredServices: 'मुख्य सेवाएं',
    authenticVedicRituals: 'प्रामाणिक वैदिक अनुष्ठान',
    spiritualConsultations: 'आध्यात्मिक परामर्श',
    sacredProducts: 'पवित्र उत्पाद',
    testimonials: 'हमारा समुदाय क्या कहता है',
    testimonial1: 'सर्वजन सेवा में गणेश चतुर्थी का उत्सव बिल्कुल दिव्य था। पुजारी जानकार थे और व्यवस्थाएं बिल्कुल सही थीं।',
    testimonial2: 'मैंने उनके ज्योतिष परामर्श के माध्यम से महान शांति और मार्गदर्शन पाया। उनके प्रामाणिक दृष्टिकोण की अत्यधिक अनुशंसा करता हूं।',
    testimonial3: 'मैंने जो आध्यात्मिक उत्पाद खरीदे हैं, उन्होंने मेरे घर में सकारात्मक ऊर्जा लाई है। उत्कृष्ट गुणवत्ता और आशीर्वादित वस्तुएं।',
    testimonialAuthor1: 'प्रिया शर्मा',
    testimonialAuthor2: 'राजेश कुमार',
    testimonialAuthor3: 'मीरा देवी',
    testimonialLocation1: 'मुंबई, भारत',
    testimonialLocation2: 'दिल्ली, भारत',
    testimonialLocation3: 'बैंगलोर, भारत',
    
    // Service descriptions
    authenticVedicRitualsDesc: 'भक्ति और उचित वैदिक प्रक्रियाओं के साथ किए जाने वाले पारंपरिक हिंदू अनुष्ठान',
    divineGuidanceDesc: 'प्राचीन ज्योतिषीय ज्ञान के माध्यम से दिव्य मार्गदर्शन प्राप्त करें',
    spiritualConsultationsDesc: 'आध्यात्मिक मार्गदर्शन और समर्थन के माध्यम से शांति और दिशा खोजें',
    
    // Common CTA and buttons
    exploreServices: 'सेवाओं का अन्वेषण करें',
    getInTouch: 'संपर्क में रहें',
    scheduleConsultation: 'परामर्श निर्धारित करें',
    viewMore: 'और देखें',
    learnMore: 'और जानें',
    
    // Form elements
    name: 'नाम',
    email: 'ईमेल',
    phone: 'फोन',
    selectService: 'सेवा चुनें',
    yourMessage: 'आपका संदेश',
    required: 'आवश्यक',
    optional: 'वैकल्पिक'
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get saved language from localStorage, default to English
    const saved = localStorage.getItem('sarvajana-language');
    return saved || 'en';
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sarvajana-language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
  };

  const translate = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const getCurrentLanguage = () => {
    return LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];
  };

  const value = {
    currentLanguage,
    changeLanguage,
    translate,
    getCurrentLanguage,
    availableLanguages: LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;