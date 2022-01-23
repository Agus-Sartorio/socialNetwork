import styled from 'styled-components';

export const StyledNotificationCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    border: 1px solid #ddd;
    padding: 15px 8px;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.1);
    transition: transform 200ms, box-shadow 200ms;
    position: relative;

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.2);
    }
    
    .icono{
        background-color: #347fd2;
        padding: 10px;
        border-radius: 50%;

        svg{ 
            color: white;
        }
    }

    .div-click{
        text-decoration: none;
        color: #444;
    }

    .link{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }

    .texto{
        color: #444;
        margin-left: 15px;
        font-size: 14px;

        .user-name{
            color: black;
            font-weight: bold;
        }
    }
`