import styled, {keyframes} from 'styled-components';
import { ReactComponent as Loadersvg } from './loader2.svg';
import { ReactComponent as Cohetesvg } from './cohete.svg';

const move = keyframes`
  
  
from {
     transform: translate(-49%, -110px) rotate(1turn) 
}
to {
    transform: translate(-49%, 0px) rotate(0turn) 
}

`;

export const Loader = styled(Loadersvg)`

  position: relative;
  width: 250px;
  height: 250px;
  z-index: -1;

      /* animation-name: ${move};
      animation-duration: 0.9s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate; */


`;

export const Cohete = styled(Cohetesvg)`

  position: relative;
  width: 50px;
  height: 50px;
  z-index: 10;

     animation-name: ${move};
      animation-duration: 0.8s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate; 

`;


