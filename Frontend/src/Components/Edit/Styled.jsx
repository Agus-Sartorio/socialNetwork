import styled, {createGlobalStyle} from 'styled-components';
import {Container,Form, Image} from 'react-bootstrap';
// import Image from "react-bootstrap/Image";;
// import Form from 'react-bootstrap/Form';



export const SidebarContainer = styled.div`
margin: 0%;
padding: 0%;
`;
export const H2= styled.h2`
margin-bottom: 2%;
margin-left:200px;
padding: 1%;
`;
export const DivSubmitContainer = styled.div`
margin: 1%;
padding: 1%;
`;

export const ButtonSubmit= styled.button`
margin-left: 0%;
margin-bottom:0%; 
padding: 1%;
background-color:black;
color: #FAE800;
position: relative;
z-index:10;
text-align:center;
border-radius:5px;
&:hover{
  color:white;
  background-color:#00BFFF;
  cursor:pointer;
  }
`;


export const PrincipalContainer = styled(SidebarContainer)`
margin-left:35%;
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
 
  cursor: pointer;
  
`;

export const FileContainerP = styled(FileContainer)`
 position: relative;
 left:380px;
 top:0px;
 height: 24px;
 width:160px;
 

  
`;

export const FormContainer = styled(SidebarContainer)`
margin-top: 10px;
display:flex;

`;

export const DownContainer = styled(SidebarContainer)`
display:flex;
justify-content: space-evenly;
flex-direction: column;
gap:15px;
position:relative;
left:12%;
margin-top:3%;

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
  overflow-y:visible;
  }
`;


export const GroupForm = styled(Form.Group)`

`;

export const LabelName = styled(Form.Label)`
color:#FAE800;
margin-top: 5px;
`;

export const LabelImgProfile = styled(Form.Label)`
color:#FAE800;
font-size: 12px;
width: 35px;
padding:2px 5px 2px 5px;
position: relative;
left:85px;
top:-25px;
background-color: black;
z-index:10000;
border-radius: 5px;
transition:0.2;
&:hover{
      cursor:pointer;
     }
`;

export const LabelImgPort = styled(Form.Label)`

left:500px;
top:-30px;
width:40;
z-index:10000;
color:#FAE800;
font-size: 12px;
width: 35px;
padding:2px 5px 2px 5px;
position: relative;
background-color: black;
border-radius: 5px;
transition:0.2;
&:hover{
      cursor:pointer;
     }

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

export const LabelRemove = styled(LabelFile)`


width:150px;
background-color:black;
color: #FAE800;
z-index:-1;
&:hover{
  color:white;
  background-color:#00BFFF;
  cursor:pointer;
}
`;




export const InputName = styled(Form.Control).attrs(props => ({
  type: props.type || 'text',
  name:props.name  || 'usurname'
  }))` 
  
  color:white;
  width:300px;
  margin:2%;
  padding:3%;
  background: transparent;
  border-color:gray;
  transition:0.2s;
  border:none;
  border-radius:5px;
  
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
     &:hover{
       
       box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
      
     }
  `;


export const InputDescription = styled(Form.Control).attrs(props => ({
  as: props.as || 'textarea',
  name:props.name  || 'description'
  }))` 
   
   width: 320px;
   height: 100px;
   background: transparent;
   color:white;
   border-radius: 5px;
   transition:0.2s;
   margin:2%;
   padding:3%;
   
   
   &::placeholder{
     color: snow;
     background: transparent;
     opacity: 0.5;
    }
    
    &:focus{

        outline: none !important;
        box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
        background: transparent;
        color:white;
        border-color:rgba(40, 217, 245);
      }
      &:hover{
       
       box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
      
     }
   `;


  export const InputFile = styled.input.attrs(props => ({
  type: props.type || 'file',
  name:props.name  ||  'ImageUploud',
  size: props.size || 'sm',
  accept:props.accept || "image/png, image/jpeg"
  }))` 
  
  width:150px;
  background-color:black;
  cursor:pointer;
  color: #FAE800;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index:-1;
  border-radius: 5px;
  &:hover{
    cursor:pointer;
  }


  
`;

export const SelectRol = styled(Form.Select)` 
  
  transition:0.2s;
  background: transparent;
  color: white;
  width: 110px;
  margin-top: 5px;
  padding:4%;
  border-radius: 5px;
  border:none;
  &:hover{
 
    cursor:pointer;
    box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
  }

  &:focus{
       outline: none !important;
      
       
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

export const OptionRol = styled.option` 

  background-color:black;
  cursor:pointer;
  color: #FAE800;
  &:hover{
    color:black;
    background-color:#00BFFF;
  }
`;

export const InputEmail = styled(InputName).attrs(props => ({
  name:props.name  || 'cohorte'
  }))` 
    width: 165px;
    padding: 3%;
    border-radius: 5px;
    border:none;
 
    &:hover{
      box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
  }
`;


export const InputBirthday = styled(InputName).attrs(props => ({
  name:props.name  || 'cohorte'
  }))` 
    width: 165px;
    padding: 3%;
    border-radius: 5px;
    border:none;
 
    &:hover{
      box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
  }
`;

export const ImageProfile = styled(Image).attrs(props => ({
  fluid: props.fluid	|| true,
  alt: props.alt  || 'Profile'
  }))` 
  
   z-index:0;
   position: relative;
   max-width:28%; 
   width:auto;
   height:auto;
   margin-top:-148px; 
   margin-left: 15px;
   border-radius: 100%;
   box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;

   &:hover{
      cursor:pointer;
     }
   /* border: 0.2rem outset #28D9F5; */
   /* position: relative;
   left: 70%; */
`;

export const ImagePortada = styled(Image).attrs(props => ({
  fluid: props.fluid	|| true,
  alt: props.alt  || 'Portada'
  }))` 
   width: 600px;
   height: 200px;
   position:relative;
   z-index:0;
   border-radius:10px;

   &:hover{
      cursor:pointer;
     }
`;