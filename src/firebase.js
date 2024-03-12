import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxj26mxIc8bD7AXmUuTWPsfMFAPh3Zkko",
  authDomain: "first-firebase-project-d1d6c.firebaseapp.com",
  databaseURL: "https://first-firebase-project-d1d6c-default-rtdb.firebaseio.com",
  projectId: "first-firebase-project-d1d6c",
  storageBucket: "first-firebase-project-d1d6c.appspot.com",
  messagingSenderId: "1096861761635",
  appId: "1:1096861761635:web:e37351281d23a7d5b8b856",
  measurementId: "G-4JDTGT5WYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore  = getFirestore(app)
//const analytics = getAnalytics(app);
