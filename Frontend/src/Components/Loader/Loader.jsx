import styled, {keyframes} from 'styled-components';
import React from 'react';
import { ReactComponent as Loadersvg } from './loader2.svg';
import { ReactComponent as Cohetesvg } from './Cohete.svg';

const move = keyframes`
  
  
from {
     rotate(0turn)
}
to {
    transform: translate(-50%, 0px) rotate(0turn) translate(50%, -200px) rotate(1turn)
}

`;

export const Loader = styled(Loadersvg)`

  position: relative;
  width: 250px;
  height: 250px;
  z-index: 10;

      /* animation-name: ${move};
      animation-duration: 0.9s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate; */

  .Cohete{  
      
      animation-name: ${move};
      animation-duration: 0.9s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate;
    }
`;



export default function LoaderFull( Loader) {


  return 
  <div>
      <Loader></Loader>
      <Cohete></Cohete>
  </div>;
}
