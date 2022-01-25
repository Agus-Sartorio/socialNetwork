import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import FormSignUp from './Components/FormSignUp/FormSignUp';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Edit from './Components/Edit/Index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
import { UserAuthContextProvider } from "./Components/Context/UserContext";
// import { ProtectedRoute } from './Components/ProtectedRoute'
import Profile from './Components/Profile/Profile.jsx';
function App() {
  return (
    <div>
      {/* <GlobalStyle/> */}
      <GlobalStyle />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='/signup' element={<FormSignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/suggestions' element={<Suggestions />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App;
