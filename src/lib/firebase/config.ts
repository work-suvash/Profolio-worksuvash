// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8cbY90d8WuL-FizlJQf2vGqurY-7D55Y",
  authDomain: "portfolio-worksuvash.firebaseapp.com",
  databaseURL: "https://portfolio-worksuvash-default-rtdb.firebaseio.com",
  projectId: "portfolio-worksuvash",
  storageBucket: "portfolio-worksuvash.firebasestorage.app",
  messagingSenderId: "1063967192596",
  appId: "1:1063967192596:web:54cf373d0197a1b1ca5901",
  measurementId: "G-62H65Y0H61"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Only enable persistence in the browser to avoid server-side errors
if (typeof window !== "undefined") {
  import("firebase/firestore").then(({ enableIndexedDbPersistence }) => {
    enableIndexedDbPersistence(db).catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        console.warn('Firestore persistence failed: multiple tabs open');
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        console.warn('Firestore persistence is not supported by this browser');
      }
    });
  });
}

export { app, db, storage, analytics };
