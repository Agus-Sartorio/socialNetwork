import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import Home from './Components/Home/Home';
import Edit from './Components/Edit/Index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
import { UserAuthContextProvider } from "./Components/Context/UserContext";
// import { ProtectedRoute } from './Components/ProtectedRoute'
import Profile from './Components/Profile/Profile.jsx';
import MyProfile from "./Components/MyProfile/MyProfile.jsx";
function App() {
  return (
    <div className='app'>
      {/* <GlobalStyle/> */}

      <GlobalStyle />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/home" element={<Home />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/myprofile' element={<MyProfile />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App;
