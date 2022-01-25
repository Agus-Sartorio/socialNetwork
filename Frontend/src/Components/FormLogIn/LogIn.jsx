import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import GithubIcon from "./Icons/GitHub";
import { Link, useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { authentication } from "../Firebase/firebase";
import Modal from "./Modal";
import { useUserAuth } from "../Context/UserContext";
import axios from "axios";


export default function Form() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  const Navigate = useNavigate();

  function githubSignIn() {
    const githubAuthProvider = new GithubAuthProvider();
    return signInWithPopup(authentication, githubAuthProvider);
  }
  const registro = async () => {
    await axios.post('http://localhost:4001/usuarios/', {
      fullname: user.displayName,
      email: user.email,
      id: user.uid,
      profile: user.photoURL
     })
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


  //Log in with email and password
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, user } = useUserAuth();
 

  const login =  async(e) => {
    e.preventDefault();
    setError("");
    try{
      await logIn(logInEmail, logInPassword);
      Navigate("/home");
    }catch(error){
      setError(error.message);

    }

  };
 


  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <Text>Inicia sesión en Henry Network</Text>
          {error && <p>{error}</p>}
          
            <ButtonContainer>
              <Input
                type="text"
                value={logInEmail}
                placeholder=" Iniciar sesión con tu email"
                onChange={(e) => setLogInEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="contraseña"
                onChange={(e) => setLogInPassword(e.target.value)}
              />
              <ButtonSig onClick={login}>Siguiente</ButtonSig>
              <Button onClick={handleGithubeSignIn}>
                {" "}
                <GithubIcon width={25} height={25} />
                <Span> Iniciar sesión con GitHub </Span>{" "}
              </Button>
              {/* <Button  onClick={signInWithGoogle}> <GoogleIcon width={25} height={25}/> <Span>Iniciar sesión con Google </Span> </Button> */}
              <ButtonContra onClick={openModal}>
                ¿Olvidaste tu contraseña?
              </ButtonContra>
              <Modal showModal={showModal} setShowModal={setShowModal} />
              <Registrarse>
                ¿No tienes una cuenta?{" "}
                <Link to="/">
                  <Re type="button"> Registrate</Re>
                </Link>
              </Registrarse>
            </ButtonContainer>
          
        </Container>
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #2e2e2e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='206' height='206' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23FAF405' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  width: 210vh;
  height: 100vh;
`;

const Re = styled.div`
  display: inline-box;
  color: black;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Registrarse = styled.div`
  font-size: 14px;
  margin: 60px;
  color: #717171;
`;

const Span = styled.span`
  margin-left: 8px;
`;
const ButtonSig = styled.button`
  margin: 2rem 0 4rem 0;
  height: 2.3rem;
  padding: 8px 40px;
  background-color: black;
  color: white;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
  width: 19rem;
  letter-spacing: 0.04rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:hover {
    opacity: 0.7;
    background-color: #9e9e9e;
    color: black;
  }
`;
const ButtonContra = styled.button`
  margin: 12px 0 20px;
  height: 2.3rem;
  background-color: white;
  color: black;
  border-radius: 3rem;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  font-weight: 700;
  width: 20rem;
  letter-spacing: 0.04rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: #d5d5d5;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 400px;
  margin-top: 50px;
  height: 80vh;
  width: 80vh;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.45);
  //   backdrop-filter: blur(8.5px);
  letter-spacing: 0.1rem;
`;

const Text = styled.h2`
  margin: 4rem 0 1rem 0;
  font-size: 20px;
  font-weight: 700;
  color: #2e2e1c;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: space-around;
`;
