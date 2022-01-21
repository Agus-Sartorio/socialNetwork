import styled from 'styled-components';

export const StyledSideBar = styled.aside`
    background-color: var(--grey-1);
    min-height: 100vh;
    width: 275px;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px 15px;

    .settings{
        margin-top: -40px;
        margin-bottom: 10px;

        li{
            list-style: none;
            color: #666;
            margin-bottom: 10px;
        }
        a{
            color: currentcolor;
            text-decoration: none;
            font-weight: bold
        }
    }

    .user{
        button{
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            font-size: 20px;
            border: none;
            background-color: transparent;
            color: #eee;
            cursor: pointer;
            width: 100%;
        }

        svg{
            vertical-align: middle;
        }

        img{
            width: 25px;
            height: 25px;
            border-radius: 999px;
            margin-left: auto;
        }
    }

    .chevron{
        transition: transform 300ms;
        transform: rotate(90deg);
    }

    details[open]{
        span{
            transition: transform 300ms;
            transform: rotate(90deg);
        }
    }

    h1{
        margin: 0;
        color: #eee;
    }

    .canales{
        display: flex;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 15px;
        margin-left: 0;

        span{
            svg{
                vertical-align: middle;
            }
        }
        
        .channels{
            margin-left: auto;
        }
        
    }
    
    .list{
        li{
            list-style: none;
            color: #666;
            margin-bottom: 10px;
        }
        a{
            color: currentcolor;
            text-decoration: none;
            font-weight: bold
        }
    }

`