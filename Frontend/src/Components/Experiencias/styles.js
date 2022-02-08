import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 95px;
  /* overflow: hidden; */
  border-radius: 7px;
  max-width: 600px;
  padding: 15px;
  background-color: var(--grey-3);
  position: relative;
  transition: height 300ms;
  transition-delay: 150ms;

  &.expanded {
    height: 140px;
    transition-delay: 0ms;

    .btn-submit,
    .tags__container {
      opacity: 1;
      transition-delay: 100ms;
    }
  }

  .img-post {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .user-img {
      margin-right: 15px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .textarea {
      min-height: 60px;
      width: 100%;
      border: 1px solid transparent;
      background-color: var(--grey-4);
      border-radius: 7px;
      font-size: 14px;
      color: #ccc;
      padding: 10px 50px 10px 10px;
      resize: none;
      transition: box-shadow 300ms, border 300ms;

      &:focus {
        outline: none;
        box-shadow: var(--box-shadow);
        border: 1px solid var(--grey-2);
      }
    }
  }

  .btn-submit {
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
    opacity: 0;
    transition: opacity 300ms, background-color 300ms, color 300ms;

    &:hover {
      transform: scale(1.03);
    }

    &:disabled {
      background-color: var(--grey-2);
      color: #999;
      cursor: not-allowed;
    }
  }

  .expanded__div {
    display: flex;
    align-items: flex-end;
  }

  .tags__container {
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 300ms;

    ul {
      list-style: none;
    }
  }

  .tags__label {
    margin-right: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #eee;
  }

  .tags__select {
    padding: 8px;
    border-radius: 5px;
    font-weight: 500;
    outline: none;
    transition: box-shadow 0.3s ease;
    border: none;
    width: 170px;
    margin-right: 15px;

    &:focus {
      box-shadow: 0 0 0 3px var(--yellow-1);
    }
  }

  .tags__btn {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 100px;
    border: 2px solid transparent;
    background-color: var(--grey-4);
    color: #eee;
    font-weight: 500;
    cursor: pointer;
    transition: border 300ms color 300ms;

    &:hover {
      border: 2px solid var(--yellow-1);

      svg {
        color: var(--yellow-1);
      }
    }

    svg {
      margin-left: 5px;
      width: 10px;
      height: 10px;
      color: #999;
    }
  }

  @media (max-width: 595px) {
    &.expanded {
      height: 190px;
    }

    .expanded__div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .btn-submit {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: 490px) {
    &.expanded {
      height: 240px;
    }
  }
`;
