import styled from "styled-components";



export const DivCardProfile = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: var(--grey-5);
padding: 10px;
width: 100%;
max-width: 1000px;
border-radius: 7px;

.card__image{
    width: 90px;
    height: 90px;
    border-radius: 50%;
}

.card__fullname{
    color: #eee;
    margin-bottom: 10px;
    font-size: 30px;
}

.card__email{
    font-size: 16px;
    font-weight: 500;
    color: #ccc;
    word-break: break-word;
    margin-bottom: 10px;
}

.card__followers{
    display: flex;
}

.card__show{
    button{
        background-color: transparent;
        border: none;
        padding: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        color: #eee;

        &:first-child{
            margin-right: 15px;
        }
    }
    span{
        display: block;
        font-size: 14px;
        color: #ccc;
    }
}

.card__btn-follow{
    width: 150px;
    padding: 8px 16px;
    background-color: var(--yellow-1);
    border: none;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 300ms, color 300ms;

    &:hover{
        background-color: black;
        color: var(--yellow-1);
    }
}
`


export const Container = styled.div`
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
        padding: 10px;
        background-color: transparent;
        margin: 3px 0;
        width: 90vw;
        max-width: 300px;
        display: flex;
        align-items: center;
        border-radius: 7px;
        transition: background-color 250ms, box-shadow 250ms;
        position: relative;

        a{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-decoration: none;
            color: black;
            font-weight: 600;
        }

        .user-img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            margin-right: 15px;
        }

        &:hover{
            background-color: white;
            box-shadow: var(--box-shadow);
        }

        .email{
            font-weight: 500;
            font-size: 13px;
            color: #666;
        }

        .span-link{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
`

export const Button = styled.div`
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

export const BtnModal = styled.div`
display: flex;
flex-direction: row;
`