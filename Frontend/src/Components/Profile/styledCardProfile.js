import styled from "styled-components";



export const DivCardProfile = styled.div`
top: 10%;
width: 70%;
position: fixed;
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



.publicaciones{
    margin-top: 50px;
    width: 50%;
    background-color: black;
    color: white;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.follow{
    background-color: yellow;
    border: 2px solid white;
    width: 80px;
    height: 25px;
    border-radius:5px;
}
.unfollow{
    background-color: white;
    color: black;
    border: 2px solid white;
    width: 80px;
    height: 25px;
    border-radius:5px;
}
`


export const Container = styled.div `
background-color: transparent;
display:flex; 
grid-column-gap: 200px;
position: absolute;
width: 100%;


`


const ModalDiv = styled.div`
    display: ${p => p.block && p.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.6);
`
const ContentDiv = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    width: 50%;
    height:auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background: white;
`

export const StyledModal = (
    {
        handleClose,
        show,
        children
    }
) => {
    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
            </button>
            </ContentDiv>
        </ModalDiv>
    )
}

export const Card = styled.div`
.name{
}
img{    
border-radius: 50%;
margin-right: 15px;
width: 100px;
height: 100px;
}    
.email{
font-weight: 500;
font-size: 13px;    
color: #666;
}   
`