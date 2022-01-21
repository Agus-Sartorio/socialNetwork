import styled from "styled-components";

export default function Button({ children, onClick, type }) {
  return <StyledButton onClick={onClick} type={type}>{children}</StyledButton>;
}

// hola

const StyledButton = styled.button`
  padding: 8px 40px;
  background: white;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  width: 65%;
  margin-top: -50px;
  height: 2.5rem;
  border: none;
  color: #242416;
  border-radius: 2rem;
  border: 1px solid #DBDBDB;
  cursor: pointer;
  transition: opacity .3s ease;
  &:focus{
      opacity: .7;
      background-color:#FFFF99;
  }
  
`