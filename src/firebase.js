// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZegwRCrL1KMbsUQrb5VRtlMkEpN9EbWE",
  authDomain: "chat-using-firebase-86217.firebaseapp.com",
  projectId: "chat-using-firebase-86217",
  storageBucket: "chat-using-firebase-86217.firebasestorage.app",
  messagingSenderId: "254593050118",
  appId: "1:254593050118:web:0a5d55d711c35574a9c587",
  measurementId: "G-S3JS6WKFVJ"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();