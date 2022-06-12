import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATiT6v699IeyaVUPV51Xy1fmIxZFFh5iU",
  authDomain: "line-clone-99f3d.firebaseapp.com",
  projectId: "line-clone-99f3d",
  storageBucket: "line-clone-99f3d.appspot.com",
  messagingSenderId: "356657676449",
  appId: "1:356657676449:web:3f7ab20435461eebeb30e0",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
