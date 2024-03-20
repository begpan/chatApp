// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
console.log(import.meta.env.VITE_API_KEY);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER,
  appId: import.meta.env.VITE_APP,
  measurementId: "G - JX624BG5C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebasedeki auth yapısının ref alma
export const auth = getAuth(app);

// google saglayıcısının kurulumu
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

// veritabanını  referansını alma

export const db = getFirestore(app);
