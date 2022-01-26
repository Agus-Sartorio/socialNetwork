import styled, {createGlobalStyle} from 'styled-components';
import {Container,Form, Image} from 'react-bootstrap';
// import Image from "react-bootstrap/Image";;
// import Form from 'react-bootstrap/Form';



export const SidebarContainer = styled.div`
margin: 0%;
padding: 0%;
`;

export const PrincipalContainer = styled(SidebarContainer)`
margin-left:25%;
margin-top: 2%;

`;

export const PortadaContainer = styled(SidebarContainer)`
  box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
  border-radius:10px;

`;

export const FileContainer = styled(SidebarContainer)`
  background-color: transparent;
  color: #FAE800; 
  margin-left: 2%;
  right: 0;
  margin-top: 5px;
  bottom: 0;
  height: 24px;
  width:160px;
  box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
  cursor: pointer;
  
`;

export const FileContainerP = styled(FileContainer)`
 position: absolute;
 left:780px;
 top:298px;
 height: 24px;
 width:160px;
 box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;

  
`;

export const FormContainer = styled(SidebarContainer)`
margin-top: 10px;

`;

export const DownContainer = styled(SidebarContainer)`
display:flex;
justify-content: space-evenly;

`;

export const Container2 = styled(Container)`
   display:flex; 
   margin: 0%;
   padding: 0%;

`;

export const OptionContainer = styled.div`
padding: 1%;
box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
width: 175px;
border-radius:5px;


`;


export const GlobalStyle = createGlobalStyle`
  body {
  background:black;
  margin: 0%;
  width: 100vh;
  height: 100vh;
  color:white;
  overflow-x: hidden;
  }
`;


export const GroupForm = styled(Form.Group)`

`;

export const Label = styled(Form.Label)`
color:#FAE800;
margin-top: 5px;
`;



export const LabelFile = styled(Form.Label)`


width:160px;
background-color:black;
color: #FAE800;
position: relative;
z-index:10;
padding: 0%;
margin:0%;
text-align:center;
border-radius:5px;
&:hover{
  color:white;
  background-color:#00BFFF;
  cursor:pointer;
}
`;




export const InputOldPassword = styled(Form.Control).attrs(props => ({
  type: props.type || 'password',
  name:props.name  || 'oldpassword'
  }))` 
  
  color:white;
  background: transparent;
  border-color:gray;
  transition:0.2s;
  
  &::placeholder{
      color: snow;
      background: transparent;
      opacity: 0.5;
  }

  &:focus{
       outline: none !important;
       box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
       background: transparent;
       border-color:rgba(40, 217, 245);
       color:white;
     }
  `;


export const InputNewPassword = styled(InputOldPassword).attrs(props => ({
  name:props.name  || 'newpassword'
  }))` 

  `;

export const InputConfirmPassword = styled(InputOldPassword).attrs(props => ({
    name:props.name  || 'confirmpassword'
    }))` 
  
    `;


export const SelectRol = styled(Form.Select).attrs(props => ({
  size: props.size || 'lg',
  // value: props.value  || 'Estudiante'
  }))` 
  
  transition:0.2s;
  background: transparent;
  color: #FAE800;
  width: 160px;
  padding-right: 10px;
  padding-bottom: 5px;
  &:hover{
    cursor:pointer;
  }

  &:focus{
       outline: none !important;
       box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
       border-color:rgba(40, 217, 245);
       
     }
`;


export const SelectUp = styled(Form.Select)` 
  position:relative;
  transition:0.2s;
  background: transparent;
  color: #FAE800;
  width: 160px;
  padding-right: 10px;
  padding-bottom: 5px;
  &:hover{
    cursor:pointer;
 } `;

export const OptionUpload = styled.option` 

width:150px;
background-color:black;
cursor:pointer;
color: #FAE800;
&:hover{
  color:white;
  background-color:#00BFFF;
}
`;




