import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDRWNV68ZESh8qIXF2S0nYgRwckrH8OAJE",
  authDomain: "xeon-24444.firebaseapp.com",
  databaseURL: "https://xeon-24444.firebaseio.com",
  projectId: "xeon-24444",
  storageBucket: "xeon-24444.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();