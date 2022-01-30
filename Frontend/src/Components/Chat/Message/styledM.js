import styled from 'styled-components';

export const Messagenormal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: flex-end;
  
  &.mesaggeown{
      margin-left: 30%;
      align-items: flex-end;
    }
    
&.mesaggeown .messagetextown{
      background-color: black;
      color: #FAE800;
    }

`;

export const MessageTop = styled.div`

    display: flex;
`;

export const Messageown= styled.div`
align-items: flex-end;
`;

export const MessageImg= styled.img`
  
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;

`;

export const MessageText= styled.p`

    padding: 10px;
    border-radius: 20px;
    background-color: #FAE800;
    color: black;
    max-width: 300px;

`;
  


