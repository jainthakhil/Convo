// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const onAuthStateChange = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user is present", uid)
    return user
    // ...
  } else {
    // User is signed out
    console.log("user logged out")
    // ...
  }
});

export const signupEmailPass = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;  // ✅ Return userCredential properly
  } catch (error) {
    console.error('Firebase signup error:', error.message);
    throw error;            // ✅ Throw error for caller to handle
  }
};

export const updateUserName = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  }).then((data) => {
    // Profile updated!
    console.log(data, "username updated")
    // ...
  }).catch((error) => {
    // An error occurred
    console.error("unable to set username")
    // ...
  });
}

export const signinWithEmailPass = async (email, password) => {
  try {
    const loggedInUser = signInWithEmailAndPassword(auth, email, password);
    return loggedInUser;
  }
  catch (error) {
    console.log(error);

  }
  // await signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
}

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};