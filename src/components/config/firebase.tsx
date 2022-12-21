
import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQE48pFl6MDta0c8C7en9en3x2quv9nvw",
    authDomain: "contacts-app-c2121.firebaseapp.com",
    databaseURL: "https://contacts-app-c2121-default-rtdb.firebaseio.com",
    projectId: "contacts-app-c2121",
    storageBucket: "contacts-app-c2121.appspot.com",
    messagingSenderId: "199152799896",
    appId: "1:199152799896:web:6dfe094a6e7fe2413fc0ed"
};


// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default getFirestore(fire)


