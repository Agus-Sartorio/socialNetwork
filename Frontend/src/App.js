import { Route, Routes } from 'react-router-dom';
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import FormSignUp from './Components/FormSignUp/FormSignUp';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Edit from './Components/Edit/Index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

      {/* <GlobalStyle/> */}
      
      <GlobalStyle/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path= "/login" element={<LogIn/>}/>
      <Route path='/signup' element={<FormSignUp/>}/>
      <Route path='/home'   element={<Home/>}/>
      <Route path='/edit'   element={<Edit/>}/>
      <Route path='/suggestions' element={<Suggestions/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
