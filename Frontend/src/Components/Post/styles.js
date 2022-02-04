import styled from "styled-components";

export const StyledPost = styled.article`
  display: flex;
  width: 100%;

  .post__link {
    color: #666;
  }

  .post__avatar {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
  }

  .post__info {
    margin-left: 20px;
    background-color: var(--grey-3);
    flex: 1;
    padding: 20px;
    border-radius: 0 7px 7px 7px;
  }

  .post__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .post__fullname {
    color: #eee;
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .post__date {
    color: #666;
    font-size: 14px;
    white-space: nowrap;
  }

  .post__description {
    margin-bottom: 20px;
    color: #ddd;
  }

  .post__footer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    /* justify-content: space-evenly; */
  }

  .post__btn {
    display: flex;
    align-items: center;
    background-color: var(--grey-4);
    border: none;
    color: #eee;
    padding: 12px 25px;
    border-radius: 8px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform 300ms, background-color 300ms, color 300ms;

    &:hover {
      transform: scale(1.05);

      &.share {
        background-color: var(--yellow-1);
        color: var(--grey-1);
      }

      &.comment {
        background-color: var(--blue-1);
      }

      &.like {
        background-color: var(--red-1);
      }
    }

    &:first-child {
      margin-left: 0;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 20px;
    }
  }

  .post__stats {
    display: flex;
    margin-right: auto;
  }

  .stats {
    color: #eee;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      padding: 5px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin-right: 7px;
    }
  }

  .post__likes {
    margin-right: 20px;

    svg {
      background-color: var(--red-1);
    }
  }

  .post__comments {
    svg {
      background-color: var(--blue-1);
    }
  }

  .post__btns {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }

  @media (max-width: 860px) {
    width: 95%;

    .post__footer {
      flex-direction: column;
    }

    .post__stats {
      width: 100%;
      margin-bottom: 15px;
      /* justify-content: flex-end; */
    }

    .post__btns {
      justify-content: space-between;
    }
  }

  @media (max-width: 750px) {
    .post__btns {
      align-items: stretch;
    }
  }

  @media (max-width: 700px) {
    .post__btns {
      justify-content: flex-start;

      span {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .post__link {
      display: none;
    }
  }

  @media (max-width: 420px) {
    .post__btn {
      margin-left: 0;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      span {
        display: inline-block;
      }
    }

    .post__btns {
      flex-direction: column;
    }
  }
`;
