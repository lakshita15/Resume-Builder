import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDer94W0zZdScSk7rNZC56GVUwySp4h09I",
  authDomain: "resume-builder-2505d.firebaseapp.com",
  projectId: "resume-builder-2505d",
  storageBucket: "resume-builder-2505d.appspot.com",
  messagingSenderId: "526843462283",
  appId: "1:526843462283:web:dd91f4572f87d545920a8e",
  measurementId: "G-5H5K8KMP06"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth , db , provider , firebaseApp};