import { Route, Routes } from 'react-router-dom';
import GlobalStyle from "./IndexStyled.jsx";
import Home from './Components/Home/Home'
// import GlobalStyle from "./IndexStyled.jsx";
import LandingPage from './Components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>

      {/* <GlobalStyle/> */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>

        </Routes>

      <GlobalStyle/>
    </div>
  );
}

export default App;
