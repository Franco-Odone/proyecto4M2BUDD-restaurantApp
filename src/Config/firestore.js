import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// If you don't pass an app instance to the function then it sets the app variable to app.getApp()
const db = getFirestore(
  initializeApp({
    apiKey: "AIzaSyAuNView7moJgNUxs9kZFjRWJZlD1Pbw_k",
    authDomain: "restaurant-app-budd.firebaseapp.com",
    projectId: "restaurant-app-budd",
    storageBucket: "restaurant-app-budd.appspot.com",
    messagingSenderId: "104480750135",
    appId: "1:104480750135:web:da1c795cd7e68d34e7ddb2",
  })
);

export { db };
