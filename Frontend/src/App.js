import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import Home from './Components/Home/Home';
import Edit from './Components/Edit/Index';
import Chat from './Components/Chat/index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
import { UserAuthContextProvider } from "./Components/Context/UserContext";
import { ProtectedRoute } from './Components/ProtectedRoute'
import Profile from './Components/Profile/Profile.jsx';
import { ViewProfile } from "./Components/MyProfile/ViewProfile.jsx";
function App() {
  return (
    <div className='app'>
      {/* <GlobalStyle/> */}

      <GlobalStyle />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/edit" element={<ProtectedRoute><Edit/></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/suggestions" element={<ProtectedRoute><Suggestions/></ProtectedRoute>} />
          <Route path='/profile/:id' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/myprofile' element={<ProtectedRoute><ViewProfile/></ProtectedRoute>} />
          <Route path='*' element={<div>NOTfound</div>}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App;
