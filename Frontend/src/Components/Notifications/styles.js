import styled from 'styled-components';

export const StyledNotifications = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-84%);

    &::after{
            content: '';
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom-color: #f3f3f3;
            position: absolute;
            bottom: 99.5%;
            left: 81.7%;
        }

    .container{
        display: flex;
        flex-direction: column;
        width: 400px;
        max-height: 350px;
        border-radius: 7px;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
        background-color: #f3f3f3;
        padding: 10px 10px 15px 10px;
        overflow-y: auto;
    
        .titulo{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: black;
            font-family: 'Montserrat', sans-serif;
            text-align: left;
            width: 100%;
            padding: 12px 5px;    
    
            .btn{
            background-color: transparent;
            border: none;
            color: #347fd2;
            font-weight: 600;
            margin-right: 20px;
            background-color: transparent;
            padding: 8px 10px;
            border-radius: 15px;
            transition: background-color 300ms;

            &:hover{
                background-color: #d1e7ff;
            }
        }
    
            p{
                margin-left: 15px;
                font-weight: 500;
                letter-spacing: 0;
            }
        }
    }
`