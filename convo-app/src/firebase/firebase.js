// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

// ✅ Your Firebase config (keep env vars correct)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// ✅ Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// ✅ Initialize Auth properly with app
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider(firebaseApp);    // optional: only if you use Google signin

// ✅ Correct reusable auth state listener
export const onAuthStateChange = (callback) => onAuthStateChanged(auth, callback);

// ✅ Signup function
export const signupEmailPass = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error('Firebase signup error:', error.message);
    throw error;
  }
};

// ✅ Update display name
export const updateUserName = async (name) => {
  try {
    await updateProfile(auth.currentUser, { displayName: name });
    console.log("Username updated successfully");
  } catch (error) {
    console.error("Unable to set username:", error.message);
  }
};

// ✅ Signin function (you missed await)
export const signinWithEmailPass = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Firebase signin error:", error.message);
    throw error;
  }
};

// ✅ Logout
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};
