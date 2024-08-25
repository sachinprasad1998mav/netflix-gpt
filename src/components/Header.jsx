import React from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user; // Corrected user variable
        dispatch(
          addUser({ user: uid, email: email, displayName: displayName })
        );

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div className="flex absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 justify-between">
      <img
        className="w-44  "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      <div className="flex">
        <button className="bg-violet-700 h-10 m-2 p-3 my-2 text-white">
          GPT Search
        </button>
        <img
          src="https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6"
          alt="user-icon"
          className="w-14 h-14 "
        />

        <button onClick={handleSignOut} className="font-bold text-white">
          Signout
        </button>
      </div>
    </div>
  );
};

export default Header;
