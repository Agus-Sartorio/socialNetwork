import styled from 'styled-components';

export const Register = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #ddf, #fff);
    & > .stack {
        background: white;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        border-radius: .5rem;
        box-shadow: 0 0 3rem #0001;
        & > p {
            text-align: center;
            font-weight: bold;
        }
        & .button {
            display: flex;
            justify-content: end;
        }
    }
`
export const Usuarios = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(to bottom right, #ddf, #fff);
& .views{
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
` 

export const Usuario = styled.div`
width: 20rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5%;
box-shadow: 0 0 3rem #00000023;
overflow:hidden;
background: white;
& > img {
    width: 100%;
}
`