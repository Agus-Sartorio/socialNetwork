import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./IndexStyled.jsx";
<<<<<<< HEAD
import LogIn from './Components/FormLogIn/LogIn';
import FormSignUp from './Components/FormSignUp/FormSignUp';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Edit from './Components/Edit/Index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import LogIn from "./Components/FormLogIn/LogIn";
import FormSignUp from "./Components/FormSignUp/FormSignUp";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Suggestions from "./Components/Suggestions/Suggestions.jsx";
import { UserAuthContextProvider } from "./Components/Context/UserContext";
import {ProtectedRoute} from './Components/ProtectedRoute'
>>>>>>> 4d080acd4cd0406ab9ea5ef9cde7dffba8a8135b
import Profile from './Components/Profile/Profile.jsx';
function App() {
  return (
    <div>
      {/* <GlobalStyle/> */}

      <GlobalStyle />
<<<<<<< HEAD
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
=======
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
>>>>>>> 4d080acd4cd0406ab9ea5ef9cde7dffba8a8135b
}

export default App;
