import styled from "styled-components";


export const StyledPost = styled.article`
    display: flex;

    .post__avatar{
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
    }

    .post__info{
        margin-left: 20px;
        background-color: var(--grey-9);
        flex: 1;
        padding: 20px;
        border-radius: 0 7px 7px 7px;
    }

    .post__header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .post__fullname{
        color: var(--grey-1);
        font-weight: 600;
        font-size: 18px;
        margin-right: 20px;
    }

    .post__date{
        color: #666;
        font-size: 14px;
        white-space: nowrap;
    }

    .post__description{
        margin-bottom: 20px;
    }

    .post__footer{
        display: flex;
        width: 100%;
        align-items: center;
        /* justify-content: space-evenly; */
    }

    .post__like{
        display: flex;
        align-items: center;
        background-color: var(--blue-2);
        border: none;
        color: var(--grey-1);
        padding: 12px 25px;
        border-radius: 8px;
        margin-right: 20px;

        svg{
            margin-right: 10px;
            width: 20px;
            height: 20px;
        }
    }
`