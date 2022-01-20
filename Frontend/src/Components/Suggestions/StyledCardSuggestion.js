import styled from "styled-components";


export const StyledCardSuggestions = styled.div`
.container-card{
    display: flex;
    flex-direction: row;
    height: 80px;
    margin: auto;
    width: 40%;
    padding: 10px;
    /* border: 3px solid #73AD21; */
    background-color: white;
    align-items: center;
    justify-content: space-between;
}

.btn{
    background-color: yellow;
    height: 30px;
    text-align: center;
    width: 60px;
    border-radius: 5px;

}

.name{
    display: flex;
    flex-direction: column;
    display: block;
}

.image{
    height: 70px;
    border-radius: 50px;
    border:1px solid black ;
    display: flex;
    align-items: center;
}

.img-name{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.Link{
    text-decoration: none;
    color: black;
}
`