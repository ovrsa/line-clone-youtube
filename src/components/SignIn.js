import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import "../App.css";

function SignIn() {
  function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={singInWithGoogle}>Googleでログインする</Button>
    </div>
  );
}

export default SignIn;
