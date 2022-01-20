import styled from 'styled-components';

export const StyledSideBar = styled.aside`
    background-color: var(--grey-1);
    min-height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px;

    h1{
        margin: 0;
        color: #eee;
    }

    .canales{
        /* display: flex;
        align-items: center; */
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 15px;

        svg{
            margin-left: 50px;
            vertical-align: middle;
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