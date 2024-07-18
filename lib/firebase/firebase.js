// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqxegxdYR5I05V0p8mEvEQIHaxezr58vU",
  authDomain: "arctic-zoo-429019-n3.firebaseapp.com",
  projectId: "arctic-zoo-429019-n3",
  storageBucket: "arctic-zoo-429019-n3.appspot.com",
  messagingSenderId: "1067870849084",
  appId: "1:1067870849084:web:b13d3abac10ed592435b39",
  measurementId: "G-E7VSB4N9J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };