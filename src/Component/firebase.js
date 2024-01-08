
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB8le7nWa1gWiNDBA03ceI23B-m2pfMjQQ",
  authDomain: "react-protfolio-b6774.firebaseapp.com",
  projectId: "react-protfolio-b6774",
  storageBucket: "react-protfolio-b6774.appspot.com",
  messagingSenderId: "272792765039",
  appId: "1:272792765039:web:5db83526dcc4cf7db1c39a"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)