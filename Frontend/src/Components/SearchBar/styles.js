import styled from 'styled-components';

export const StyledDiv = styled.div`
display:flex;
justify-content: center;
form{
    background-color: white;
    width:fit-content;
    border-radius:8px;
    border: none;
    background-color: rgba(var(--bb2,239,239,239),1);
    padding: 0 16px;
}
input{
    font-size:16px;
    color:#000;
    outline: none;
    border: none;
    border-radius:15px;
    background-color:transparent;
}
button{
    margin-left: 5px;
    border-radius:5px;
    border:none;
    background-color:transparent;
    padding: 10px 10px 10px 0;
    color:rgba(var(--f52,142,142,142),1);
}
`