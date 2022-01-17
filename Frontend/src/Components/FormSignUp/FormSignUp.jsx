import React from "react";
import styled from "styled-components";
import Input from "../FormLogIn/Input";

export default function SignUp() {
  return (
    <MainContainer>
      <Container>
        <Texto>Crea tu cuenta </Texto>
        <Input type="text" placeholder="Nombre" />
        <Input type="text" placeholder="Correo electronico" />
        <Input type="password" placeholder="Contraseña" />
      </Container>
    </MainContainer>
    

  )
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='206' height='206' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23FAF405' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  width: 210vh;
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
//   backdrop-filter: blur(8.5px);
  letter-spacing: 0.1rem;
`;

const Texto = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Roboto:ital,wght@1,300&display=swap');
  margin: 2rem 200px 1rem 0;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #2E2E1C;
   align-items: center;
`