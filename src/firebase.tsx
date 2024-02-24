import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzT9m_0xBgQOKYD_EnLiOi4WZ4GQ1jopc",
  authDomain: "restaurant-sales-track.firebaseapp.com",
  projectId: "restaurant-sales-track",
  storageBucket: "restaurant-sales-track.appspot.com",
  messagingSenderId: "882436388011",
  appId: "1:882436388011:web:95ef172e616939543ff3ee",
};

const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);
