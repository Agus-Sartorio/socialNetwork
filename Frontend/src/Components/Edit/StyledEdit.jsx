import styled, {createGlobalStyle} from 'styled-components';
import Form from 'react-bootstrap/Form'
import {Container} from 'react-bootstrap';



export const Container1 = styled.div`
width: 100vh;
display: flex;
justify-content: center;

`;

export const Container2 = styled(Container)`

`;


export const GlobalStyle = createGlobalStyle`
  body {
  background:black;
  margin: 0%;
  width: 100vh;
  height: 100vh;
  color:white;
  }
`;


export const GroupForm = styled(Form.Group)`

`;

export const LabelName = styled(Form.Label)`
color:#FAE800;
margin-top: 5px;

`;

export const InputName = styled(Form.Control).attrs(props => ({
  type: props.type || 'text',
  name:props.name  || 'usurname'
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


export const InputDescription = styled(Form.Control).attrs(props => ({
  as: props.as || 'textarea',
  name:props.name  || 'description'
  }))` 
   
   width: 600px;
   height: 100px;
   background: transparent;
   color:white;
   border-radius: 5px;
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
        color:white;
        border-color:rgba(40, 217, 245);
      }
   `;

export const SelectRol = styled(Form.Select).attrs(props => ({
  size: props.size || 'lg',
  // value: props.value  || 'Estudiante'
  }))` 
  
  transition:0.2s;
  background: transparent;
  color: #FAE800;
  width: 150px;
  &:hover{
    cursor:pointer;
  }

  &:focus{
       outline: none !important;
       box-shadow: 0 1px 1px rgba(40, 217, 245, 0.5)inset, 0 0 10px #28D9F5;
       border-color:rgba(40, 217, 245);
       
     }
`;

export const OptionRol = styled.option` 

  background-color:black;
  cursor:pointer;
  color: #FAE800;
  &:hover{
    color:black;
  }
`;

export const InputCohorte = styled(InputName).attrs(props => ({
  name:props.name  || 'cohorte'
  }))` 
    width: 100px;
`;