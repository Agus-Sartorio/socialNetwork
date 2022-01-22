import { Route, Routes } from 'react-router-dom';
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import FormSignUp from './Components/FormSignUp/FormSignUp';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Edit from './Components/Edit/Index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import Profile from './Components/Profile/Profile.jsx';
>>>>>>> 0ddb8862446851667ee084e843d3f49bb0d381e4

function App() {
  return (
    <>

      {/* <GlobalStyle/> */}

      <GlobalStyle />
      <Routes>

      <Route path="/" element={<LandingPage/>}/>
      <Route path= "/login" element={<LogIn/>}/>
      <Route path='/signup' element={<FormSignUp/>}/>
      <Route path='/home'   element={<Home/>}/>
      <Route path='/edit'   element={<Edit/>}/>
      <Route path='/suggestions' element={<Suggestions/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>


    </>
  );
}

export default App;
