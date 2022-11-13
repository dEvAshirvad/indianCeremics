import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTvpf6e1l5ghQ_XpZkPZGP8OCn0wLDs74",
  authDomain: "indianceremics-dev.firebaseapp.com",
  projectId: "indianceremics-dev",
  storageBucket: "indianceremics-dev.appspot.com",
  messagingSenderId: "489334753511",
  appId: "1:489334753511:web:3670f30c038f6f38103a42",
  measurementId: "G-JWG74CQ1Q2"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);