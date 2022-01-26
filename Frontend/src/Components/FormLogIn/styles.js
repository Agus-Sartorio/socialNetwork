import styled from 'styled-components';

export const StyledLogIn = styled.div`
    background-color: var(--grey-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .texto{
        display: flex;
        align-items: center;
        justify-content: center;

        .logo{
            width: 80px;
            height: 80px;
        }
        .welcome{
            text-transform: uppercase;
            color: #eee;
        }
    }

    .btn-logIn{
        display: flex;
        align-items: center;
        padding: 10px 35px;
        background-color: var(--yellow-1);
        border: none;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 300ms, color 300ms;

        svg{
            margin-right: 12px;
        }

        &:hover{
            background-color: black;
            color: var(--yellow-1);
        }
    }

`