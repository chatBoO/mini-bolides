// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAn30Cxcz7BAC8MMYMSWGN8Z938qqyC534",
	authDomain: "mini-bolides-vcb.firebaseapp.com",
	projectId: "mini-bolides-vcb",
	storageBucket: "mini-bolides-vcb.appspot.com",
	messagingSenderId: "926749796764",
	appId: "1:926749796764:web:9937598eaab3b37ed70059",
	measurementId: "G-C0EWVJX76J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
