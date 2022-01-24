import React, { useState } from 'react';
import Account from './Account';
import EditProfile from './EditProfile';
<<<<<<< HEAD
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
>>>>>>> 06fa8785263f7dcb32ea29395437e002a1582806
// import ReactHover from 'react-hover';
// import { FormControl, FormLabel } from 'react-bootstrap';
import {
      GlobalStyle, Container2, SidebarContainer,

} from './Styled';

function Edit() {

<<<<<<< HEAD
  const [gstate, setgstate] = useState(true);
         
    return (
         
    <>
      
      <NavBar/>  
        <Container2>
           <SidebarContainer>
              <SideBar setgstate={setgstate}/>
           </SidebarContainer>
           {gstate? <EditProfile/> : <Account/>}
     </Container2>
      </>

    );} 
=======
      const [gstate, setgstate] = useState(true);

      return (

            <>

                  <NavBar />
                  <GlobalStyle />
                  <Container2>
                        <SidebarContainer>
                              <SideBar setgstate={setgstate} />
                        </SidebarContainer>
                        {gstate ? <EditProfile /> : <Account />}
                  </Container2>
            </>

      );
}
>>>>>>> 06fa8785263f7dcb32ea29395437e002a1582806

export default Edit;

