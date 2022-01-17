import { Route, Routes } from 'react-router-dom';
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import FormSignUp from './Components/FormSignUp/FormSignUp';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path= "/login" element={<LogIn/>}/>
      <Route path='/signup' element={<FormSignUp/>}/>
      <Route path='/home'   element={<Home/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
