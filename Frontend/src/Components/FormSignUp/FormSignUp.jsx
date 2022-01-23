import React, { useState } from "react";
import styled from "styled-components";
import Input from "../FormLogIn/Input";
import { useUserAuth } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";



export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("")
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(registerEmail, registerName, registerPassword);
      navigate("/login");
    } catch (error) {
      setError(error.message);

    }

  };

  return (
    <MainContainer>
      <Container>
        <Texto>Crea tu cuenta </Texto>
        {error && <p>{error}</p>}
        <Input
          required
          type="text"
          placeholder="Nombre completo"
          onChange={(event) => {
            setRegisterName(event.target.value);
          }}
        />
        <Input
          required
          type="email"
          placeholder="Correo electronico"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <Input
          required
          type="password"
          placeholder="Contraseña"
          requiered
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <Button onClick={register}>Registrarte</Button>
      </Container>
    </MainContainer>
  );
}

const Button = styled.button`
  margin: 4rem 0 4rem 0;
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
    background-color: #b3b3ad;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='206' height='206' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23FAF405' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  width: 210vw;
  height: 100vh;
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
  box-shadow: 0 8px 32px 0 rgba(13, 15, 51, 0.45);
  letter-spacing: 0.1rem;
`;

const Texto = styled.h2`
  margin: 2rem 200px 1rem 0;
  font-size: 25px;
  font-weight: 700;
  color: #2e2e1c;
`
