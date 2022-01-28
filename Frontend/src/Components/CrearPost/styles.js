import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 90%;
    height: 90px;
    overflow: hidden;
    border-radius: 7px;
    max-width: 600px;
    padding: 15px;
    background-color: var(--grey-9);
    position: relative;
    transition: height 300ms;

    &.expanded{
        height: 140px;
    }

    .img-post{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        .user-img{
            margin-right: 15px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        .textarea{
            min-height: 60px;
            width: 100%;
            border: 1px solid transparent;
            background-color: white;
            border-radius: 7px;
            font-size: 14px;
            padding: 10px 50px 10px 10px;
            resize: none;
            transition: box-shadow 300ms, border 300ms;

            &:focus{
                outline: none;
                box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.1);
                border: 1px solid #ddd;
            }
        }
    }

    .file-btn{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: background-color 300ms;

        .input-file{
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .btn{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            pointer-events: none;
            background-color: transparent;
            border: none;
            color: var(--blue-1);

        }
        &:hover{
            background-color: var(--blue-2);
        }
    }

    .btn-submit{
        margin-left: auto;
        background-color: transparent;
        border: none;
        color: white;
        font-weight: 600;
        background-color: var(--blue-1);
        padding: 8px 10px;
        border-radius: 15px;
        cursor: pointer;
        transition: transform 300ms;

            &:hover{
                transform: scale(1.05);
            }
    }
`