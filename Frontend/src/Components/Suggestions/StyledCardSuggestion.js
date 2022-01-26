import styled from "styled-components";


export const StyledCardSuggestions = styled.div`
.container-card{
    border: 1px solid var(--yellow-1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.btn{
height:30px;
background-color: var(--yellow-1);
border-radius: 5px;
width: 50%;
position: relative;
left: 25%;

}

.btn2{
height:30px;
background-color: black;
color: white;
border-radius: 5px;
width: 50%;
position: relative;
left: 25%;

}
.image{
    height: 70px;
    border-radius: 50px;
    border:1px solid black ;
    position: relative;
}



.Link{
    text-decoration: none;
    color: black;
}
`