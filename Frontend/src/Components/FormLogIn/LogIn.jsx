import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import GithubIcon from "./Icons/GitHub";
import { Link } from "react-router-dom";

export default function Form() {
 
 

  return (
    <Wrapper>
     <MainContainer>
      <Container>
        <Text>
          Inicia sesión en Henry Network
        </Text>
        {/* comentario */}
        <form>
        <ButtonContainer>
            <Input  type="text" placeholder=" Iniciar sesión con tu email" />
            <Input  type="password" placeholder="contraseña" />
            <Link to="/home"><ButtonSig>Siguiente</ButtonSig></Link>
            <Button> <GithubIcon width={25} height={25} /><Span> Iniciar sesión con GitHub </Span> </Button>
            {/* <Button  onClick={signInWithGoogle}> <GoogleIcon width={25} height={25}/> <Span>Iniciar sesión con Google </Span> </Button> */}
            <ButtonContra>¿Olvidaste tu contraseña?</ButtonContra>
            <Registrarse>¿No tienes una cuenta? <Link to='/'><Re type='button'> Registrate</Re></Link></Registrarse>
        </ButtonContainer>
            </form>
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



const Re= styled.div`
display: inline-box;
color: black;
font-size:14px;
text-decoration: none;
&:hover{
    text-decoration: underline;
}

`
const Registrarse = styled.div`
font-size: 14px;
margin: 60px;
color: #717171;
`

const Span = styled.span`
margin-left: 8px;
`
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
&:hover{
    opacity: .7;
    background-color: #FFFF99;
}
`
const ButtonContra = styled.button`
margin: 12px 0 20px;
height: 2.3rem;
background-color: white;
color: black;
border-radius: 3rem;
border: 1px solid  #DBDBDB;
cursor: pointer;
font-weight: 700;
width: 19rem;
letter-spacing: 0.04rem;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: space-around;
&:hover{
    background-color: #D5D5D5;
}
`

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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Roboto:ital,wght@1,300&display=swap');
  margin: 4rem 0 1rem 0;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #2E2E1C;
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


`
