import React from "react";
import GithubIcon from "../Icons/GitHub";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from "../Firebase/firebase";
import { useUserAuth } from "../Context/UserContext";
import axios from "axios";
import { bake_cookie } from 'sfcookies'

export default function Form() {

  const Navigate = useNavigate();

  function githubSignIn() {
    const githubAuthProvider = new GithubAuthProvider();
    return signInWithPopup(authentication, githubAuthProvider);
  }
  const registro = async () => {
    const {data:{data}} = await axios.post(`${process.env.REACT_APP_PUERTO}usuarios`, {
      fullname: user.displayName,
      email: user.email,
      id: user.uid,
      profile: user.photoURL
     })
     bake_cookie('userToken',data)
  }
  const handleGithubeSignIn = async (e) => {
    e.preventDefault();
    try {
      await githubSignIn();
      await registro();
      Navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useUserAuth();

  return (
    <button onClick={handleGithubeSignIn}>
      {" "}
      <GithubIcon width={25} height={25} />
      <span> Iniciar sesión con GitHub </span>{" "}
    </button>
  );
};
