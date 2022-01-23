import styled from 'styled-components';

export const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100vw;
border-bottom: 5px solid var(--yellow-1);
background-color: #1D1D1D;
color: #eee;
padding: 20px 0;    

div{
    display: flex;
    align-items: center;
}

p{
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 15px; 
}

img{
    width: 25px;
    height: 25px;
    margin-left: 5px;
}

.botones{
    display: flex;
    justify-content: space-around;
    width: 150px;

    .open{
        position: relative;
    }

    & > *{
        position: relative;
        font-family: 'Roboto', sans-serif;
        
        span{
            position: absolute;
            background-color: var(--yellow-1);
            color: var(--grey-1);
            font-weight: 500;
            top: 120%;
            left: 50%;
            font-size: 13px;
            transform: translateX(-50%);
            opacity: 0;
            padding: 4px 8px;
            border-radius: 3px;
            visibility: hidden;
            transition: opacity 0.5s;
        }
        &:hover{
            span{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    span:after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: var(--yellow-1);
        position: absolute;
        bottom: 80%;
        left: 50%;
        transform: translatex(-50%)
    }
    button{
        /* margin-left:30px; */
        background-color: transparent;
        border: none;
        color: #eee;
        cursor: pointer;
    }
    .link{
        text-decoration: none;
        color: #eee;
    }
}
`