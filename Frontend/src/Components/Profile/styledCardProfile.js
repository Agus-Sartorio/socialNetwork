import styled from "styled-components";



export const DivCardProfile = styled.div`
top: 15%;
width: 100%;
position: absolute;
display: flex;
align-items: center;
flex-direction: column;
grid-row-gap: 10px;

.head{
    width: 50%;
    display: flex;
    align-items: center;
    height: 200px;
    background-image: url('https://webescuela.com/wp-content/uploads/2020/08/que-hace-un-desarrollador-web.png.webp');
    border-radius: 5px;
    background-repeat:no-repeat;
    background-size: 100% 120px;
}

.body{
    color: white;
    background-color: black;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

.img{
    border-radius: 50%;
    border: 2px solid black;
    width: 150px;
}

.follows-button{
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-around;
}

button{
    background-color: yellow;
    border: 2px solid white;
    width: 80px;
    height: 25px;
    border-radius:5px;
}
`