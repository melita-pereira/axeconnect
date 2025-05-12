// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9uGAIt-RmW-T498ZTbK_4P8wBh4WjAh0",
  authDomain: "axeconnect-727ba.firebaseapp.com",
  databaseURL: "https://axeconnect-727ba-default-rtdb.firebaseio.com",
  projectId: "axeconnect-727ba",
  storageBucket: "axeconnect-727ba.firebasestorage.app",
  messagingSenderId: "839677221610",
  appId: "1:839677221610:web:f72042a6fcd8fd7e2d5593",
  measurementId: "G-RFZ55WTNEP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);