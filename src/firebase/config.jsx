import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1PBEtlFWe-iBdAQbD7Rcshm8PU5cP478",
    authDomain: "avaliacao-lifedev.firebaseapp.com",
    projectId: "avaliacao-lifedev",
    storageBucket: "avaliacao-lifedev.appspot.com",
    messagingSenderId: "991641581106",
    appId: "1:991641581106:web:1d406dcdb132e698742e2b",
    measurementId: "G-B44VD593WK"
};
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }