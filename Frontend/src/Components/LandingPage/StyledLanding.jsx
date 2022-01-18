import styled, {keyframes, createGlobalStyle} from 'styled-components';
import { ReactComponent as LogoHenrysvg } from './LogoHenry.svg';
import { ReactComponent as Planetsvg } from './planeta.svg';
import { ReactComponent as Starsvg } from './star.svg';
import { ReactComponent as Meteoritesvg } from './meteorite.svg';
import { ReactComponent as Lunasvg } from './luna.svg';
import { ReactComponent as Rocketsvg } from './rocket.svg';
import { ReactComponent as Cohetesvg } from './cohete.svg';
import { ReactComponent as Henrysvg } from './Henry2.svg';

export const GlobalStyle = createGlobalStyle`
  body {
  background:black;
  margin: 0%;
  width: 100vh;
  height: 100vh;
  }
`;

const stars = keyframes`
  
  0% { transform: scale(0.9); animation-timing-function: cubic-bezier(0.33333, 0.66667, 0.66667, 1) }
  69.0983% { transform: scale(1.1); animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333) }
  100% { transform: scale(1.0) }
`;

const move = keyframes`
  
  from {
    transform: translate(-50%, 200px) rotate(1turn) translate(50%, -200px) rotate(0turn)
}
to {
    transform: translate(-50%, 0px) rotate(0turn) translate(50%, -200px) rotate(1turn)
}

`;

const caida = keyframes`
  
  from {
    transform: translate(-150%, -250px)
     }
   to {
     transform: translate(100%, 200px) 
}
`;

const caida2 = keyframes`
  
  from {
    transform: translate(-20%, 0px)
     }
   to {
     transform: translate(100%, 200px) 
}
`;


export const LandingContainer = styled.div`

`;

export const FraseContainer = styled.div`
  position: relative;
  display:flex;
  justify-content: center;
  margin: 0%;
  padding: 0%;
  width: 300px;
  left:10%
`;

export const InfoContainer = styled(FraseContainer)`
  
  gap:0;
  flex-direction: column;
  justify-content: center;
  margin: 0%;
  padding: 0%;
  width: 150px;
  left:20%;
  text-decoration:none;

  &:hover{
    cursor:pointer;
    .Cohetico{
     fill: blue;
    }
  }
`;

export const Frase = styled.h3`

  color:#1D1D1D;
  font-size:22px;
  text-decoration:none;

`;

export const Info = styled.h3`

  color:#1D1D1D;
  font-size:20px;

`;


export const ButtonContainer = styled.div`

position: relative;
display: flex;
left: 40%;
/* top:25px;  */
gap:10px;
margin-top: 20px;
padding: 0%;
justify-content: center;
width: 300px;

`;

export const Button = styled.button`
 
          
           margin-top: 0;
           padding: 5px 20px 5px 20px;
           font-size: 30px;
           border-radius: 20px ;
           background-color:#FAE800;
           border:none;
           box-shadow: 15px 15px 37px 7px rgb(0, 0, 0);

           &:hover{
               cursor: pointer;
               background-color:#1D1D1D;
               color:#FAE800;

           }
  
`;





export const LogoHenry = styled(LogoHenrysvg)`

  position: absolute;
  top: -20px;
  left: 40.5%;
  width: 250px;
  height: 250px;
  z-index: -1;

  /* .Cohete{  
      fill:#FAE800;
      z-index: 100;
      animation-name: ${stars};
      animation-duration: 2s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate;
    } */
`;

export const Henry = styled(Henrysvg)`
  
  position: absolute;
  top:-2px;
  left: 100%;
  width: 100px;
  /* height: 50px; */
  margin: 0%;
  padding:0%;
  z-index: 1000;
 
`;

export const Planet = styled(Planetsvg)`

  position: absolute;
  top: 200px;
  left: 39%;
  width: 250px;
  height: 250px;
`;


export const Cohete = styled(Cohetesvg)`

  z-index:100;
  position: absolute;
  top: 72px;
  left: 55.2%;
  width: 35px;
  height: 35px;

  animation: ${move} 3s linear;
  animation-direction: reverse;

      /* animation-duration: 2s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate;  */
`;


export const Star = styled(Starsvg)`

  position: absolute;
  top: 70px;
  left: 70%;
  width: 60px;
  height: 60px;

    animation-name: ${stars};
      animation-duration: 0.9s;
      animation-iteration-count: infinite; 
      animation-delay: 0.05s;
      animation-timing-function: ease;
      animation-direction: alternate;

`;
export const Star1 = styled(Star)`
    top: 20px;
    left: 7%;
    width: 100px;
    height: 100px;
    animation-duration: 1s;
`;

export const Star2 = styled(Star)`
    top: 400px;
    left: 15%;
    width: 15px;
    height: 15px;
    animation-duration: 0.5s;
`;

export const Star3 = styled(Star)`
    top: 378px;
    left: 60%;
    width: 25px;
    height: 25px;
    animation-duration: 1.3s;
`;

export const Star4 = styled(Star)`
    top: 230px;
    left: 94%;
    width: 35px;
    height: 35px;
    animation-duration: 2.5s;
`;

export const Star5 = styled(Star)`
    top: 100px;
    left: 32%;
    width: 35px;
    height: 35px;
    animation-duration: 0.7s;
`;

export const Luna = styled(Lunasvg)`
    position: absolute;
    top: 200px;
    left: 60%;
    width: 50px;
    height: 50px;
    z-index:-1;
`;
export const Meteorite = styled(Meteoritesvg)`
    position: absolute;
    top: 200px;
    left: 20%;
    width: 100px;
    height: 100px;

    animation-name: ${caida};
      animation-duration: 40s; 
      animation-timing-function: ease;
      animation-iteration-count: infinite; 
    
`;


export const Rocket = styled(Rocketsvg)`
    position: absolute;
    top: 250px;
    left: 75%;
    width: 150px;
    height: 150px;
    z-index:-100;

      animation-name: ${caida2};
      animation-duration: 40s; 
      animation-timing-function: ease;
      animation-iteration-count: infinite; 
`;

export const Foot = styled.div`
  position: absolute;
  display: flex;
  z-index: -1;
  text-align: center;
  background:#FAE800;
  margin: 0%;
  padding: 0%;
  top: 86%;
  width: 100%;
  height: 85px;

`;





// export const ImageHenry = styled.img.attrs({
//     src: `${ImageLanding}`
//   })`
      
//       position: absolute;
//       top: 40px;
//       left: 50%;
//       border-radius:20px;
// `;
