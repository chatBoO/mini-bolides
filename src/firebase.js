// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "mini-bolides-vcb.firebaseapp.com",
	projectId: "mini-bolides-vcb",
	storageBucket: "mini-bolides-vcb.appspot.com",
	messagingSenderId: "926749796764",
	appId: import.meta.env.VITE_APP_ID,
	measurementId: "G-C0EWVJX76J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
