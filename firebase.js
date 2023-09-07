import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyClVT_mP3TJ_6Tb6fFYmQ5HpkPMiYnVS2Y",
  authDomain: "react-notes-app-24978.firebaseapp.com",
  projectId: "react-notes-app-24978",
  storageBucket: "react-notes-app-24978.appspot.com",
  messagingSenderId: "567319714394",
  appId: "1:567319714394:web:f01f00424527210df41663"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db , "notes");