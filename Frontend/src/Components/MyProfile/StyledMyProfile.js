import styled from "styled-components";


export const Div = styled.div`
display: flex;
`

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
export const ModalDiv = styled.div`
    display: ${p => p.block && p.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.6);
`
export const ContentDiv = styled.div`
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

export const DivSelect = styled.div`
display: flex;
flex-direction: row;
`
export const DivModal = styled.div`
display: flex;
flex-direction: row;
`
