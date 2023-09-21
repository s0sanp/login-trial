import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAmfn1huejaJ4C2WQRq5TUnBGoQzCyhIIs",
  authDomain: "logintrial-e8c63.firebaseapp.com",
  projectId: "logintrial-e8c63",
  storageBucket: "logintrial-e8c63.appspot.com",
  messagingSenderId: "489502295889",
  appId: "1:489502295889:web:9d8427ae8c56542440b570"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};