import styled from "styled-components";


export const Conatiner = styled.div`
background-color: transparent;
display:flex; 
   grid-column-gap: 200px;
   position: absolute;
   width: 100%;
`
export const DivWelcome = styled.div`
text-align: center;
background-color: #1D1D1D;
width: 60%;
height: 600px;
top: 100px;
border-radius: 10px;
position: relative;
color: #1D1D1D;
border: 5px solid var(--yellow-1);
`

export const DivText = styled.div`
background-color: var(--yellow-1);
position: relative;
top: 150px;
`

export const DivButton = styled.div`
background-color: red;
.btn{
   background-color: var(--yellow-1);
   color: #1D1D1D;
   height: 30px;
}

`

export const DivFrase = styled.div`
background-color: var(--yellow-1);
position: relative;
width: 30%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
left: 35%;
top: 250px;
border-radius: 5px;
`