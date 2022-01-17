import React from 'react';
import {Link} from 'react-router-dom';
import { LandingContainer, LogoHenry, Planet, Rocket,
     Star, Star1, Star2, Star3, Star4, Star5, 
     Meteorite, Luna, Foot, Cohete, 
     ButtonContainer, Button, GlobalStyle, FraseContainer ,Frase } from './StyledLanding.jsx'


 function LandingPage() {
    return (     
        
     <LandingContainer>
         <GlobalStyle/>
         <LogoHenry/>
         <Cohete/>
         <Planet/>
         <Rocket/>
         <Star/>
         <Star1/>
         <Star2/>
         <Star3/>
         <Star4/>
         <Star5/>
         <Luna/>
         <Meteorite/>

         <Foot>

             <FraseContainer>
                 <Frase>Talk about development with others developers!!</Frase>
             </FraseContainer>


            <ButtonContainer>
              <Link to='/login'>
                    <Button>Log In</Button>
              </Link>
                 
              <Link to='/signup'>
                    <Button>Sign Up</Button>
              </Link>
           </ButtonContainer>

         </Foot>
     
     </LandingContainer>
    


 );} 

export default LandingPage;
