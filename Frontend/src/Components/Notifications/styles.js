import styled from 'styled-components';

export const StyledNotifications = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 355px;
    margin-left: -349px;
    width: 400px;
    height: 300px;
    border-radius: 7px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: white;

    &::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: white;
        position: absolute;
        bottom: 100%;
        left:  81.8%;
    }

    .titulo{
        color: black;
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        border-bottom: 0.5px solid #999;
        width: 100%;
        padding: 12px 5px;    

        p{
            margin-left: 15px;
            font-weight: 500;
            letter-spacing: 0;

        }
    }
`