import styled from 'styled-components';

export const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
min-width: 100vw;
border-bottom: 1.5px solid rgba(var(--bb2,239,239,239),1);

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
    & > *{
        position: relative;
        font-family: 'Roboto', sans-serif;
        span{
            position: absolute;
            background-color: #273639;
            color: #fafafa;
            top: 150%;
            left: 50%;
            font-size: 12px;
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
        border-bottom-color: #273639;
        position: absolute;
        bottom: 80%;
        left: 50%;
        transform: translatex(-50%)
    }
    button{
        margin-left:30px;
        background-color: transparent;
        border: none;
    }
    .link{
        text-decoration: none;
        color: black;
    }
}
`