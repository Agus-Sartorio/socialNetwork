import styled from "styled-components";

export const SuggestionsDiv = styled.div`

width: 100%;
position: absolute;
background-color: rgba(var(--bb2,239,239,239),1);
height: 100%;
.title{
    margin: auto;
    width: 40%;
    padding: 10px;
}

.espacios{
    height: 5%;
}
`


export const DivSug = styled.div`
display:flex; 
grid-column-gap: 150px;
position: absolute;
width: 100%;
`

export const DivCards = styled.div`
position: relative;
align-content: center;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
padding: 5px 5px 0px 5px;

`