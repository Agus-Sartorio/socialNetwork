import styled from "styled-components";

export default function Input({ type, placeholder, name, onChange, value }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;

  width: 56%;
  height: 1rem;
  padding: 1rem;
  margin: 20px 0 0 0;
  border: 1px solid #dbdbdb;
  outline: none;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  scroll-behavior: smooth;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1rem;
    // backdrop-filter: blur(10rem);
  }
  &:placeholder {
    color: #dbdbdb;
    font-weight: 100;
    font-size: 1rem;
  }
`;
