// README: REMOVE EXAMPLE- IN THE FILE NAME

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "xxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxx"x
};

// Initialize Firebase
const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const firestore_db = getFirestore();
// const analytics = getAnalytics(firebase_app);
export { firebase_app, firestore_db }
