import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./IndexStyled.jsx";
import LogIn from './Components/FormLogIn/LogIn';
import Home from './Components/Home/Home';
import Edit from './Components/Edit/Index';
import Chat from './Components/Chat/index';
import Suggestions from './Components/Suggestions/Suggestions.jsx';
import { UserAuthContextProvider } from "./Components/Context/UserContext";
import { ProtectedRouteLocked } from './Components/ProtectedRoutes/ProtectedRouteLocked'
import Profile from './Components/Profile/Profile.jsx';
import { ViewProfile } from "./Components/MyProfile/ViewProfile.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import { Publication } from "./Components/Publication/Publication.jsx";
import { ProtectedRouteAdmin } from "./Components/ProtectedRoutes/ProtectedRouteAdmin.jsx";
import { Authorize } from "./Components/Admin/Authorize.jsx";
import Experiences from "./Components/Experiencias/ExperienceHome.jsx";
import { BlockAccount } from "./Components/Admin/BlockAccount/BlockAccount.jsx";
import { ProtectedRoute } from "./Components/ProtectedRoutes/ProtectedRoute.jsx";

function App() {

  return (
    <div className='app'>
      {/* <GlobalStyle/> */}

      <GlobalStyle />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/edit" element={<ProtectedRouteLocked><Edit /></ProtectedRouteLocked>} />
          <Route path="/chat" element={<ProtectedRouteLocked><Chat/></ProtectedRouteLocked>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/suggestions" element={<ProtectedRouteLocked><Suggestions /></ProtectedRouteLocked>} />
          <Route path='/profile/:id' element={<ProtectedRouteLocked><Profile /></ProtectedRouteLocked>} />
          <Route path='/myprofile' element={<ProtectedRouteLocked><ViewProfile /></ProtectedRouteLocked>} />
          <Route path='/post/:id' element={<ProtectedRouteLocked><Publication/></ProtectedRouteLocked>}/>
          <Route path='/admin/authorize' element={<ProtectedRouteAdmin><Authorize/></ProtectedRouteAdmin>}/>
          <Route path='/admin/blockAccount' element={<ProtectedRouteAdmin><BlockAccount/></ProtectedRouteAdmin>}/>
          <Route path='experiences' element={<Experiences/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App;
