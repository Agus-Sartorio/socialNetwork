import styled from 'styled-components';

export const StyledForm = styled.form`
    display:flex;
    justify-content: center;
    background-color: white;
    border-radius:8px;
    border: none;
    background-color: white;
    padding: 0 16px 0 5px;
    margin: 0 10px;

input{
    font-size:16px;
    color:#000;
    outline: none;
    border: none;
    border-radius:15px;
    background-color:transparent;
    width: 100%;
    max-width: 300px;
}
button{
    margin-left: 5px;
    border-radius:5px;
    border:none;
    background-color:transparent;
    padding: 5px;
    color: #777;
    display: flex;
    align-items: center;
    justify-content: center;
}
`