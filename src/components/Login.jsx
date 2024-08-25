import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { bg_URL } from "../utils/const";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const navigate = useNavigate();
  const [validate, setValidate] = useState("");
  const handleClick = () => {
    setIsSignInFrom(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const handleValidationClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setValidate(message);
    if (message) {
      return;
    } else {
      // Sign in and Sign up
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User created successfully:", user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidate(errorCode + " - " + errorMessage);
            navigate("/");
          });
      } else {
        // sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User Logged In successfully:", user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidate(errorCode + " - " + errorMessage);
            navigate("/");
          });
      }
    }
  };
  return (
    <div>
      <div className="absolute">
        <img src={bg_URL} alt="backgroundIMG" />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500"
          ref={email}
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
          ref={password}
        />
        <button
          className="p-4 my-6 bg-red-700 w-full cursor-pointer"
          onClick={handleValidationClick}
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleClick}>
          {isSignInForm
            ? " New to Netflix? Sign up now."
            : "Already Registered? Sign In now"}
        </p>
        <h3 className="text-red-600">{validate}</h3>
      </form>
    </div>
  );
};

export default Login;
