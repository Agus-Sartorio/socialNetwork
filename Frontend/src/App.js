import { Route, Routes } from 'react-router-dom';
// import GlobalStyle from "./IndexStyled.jsx";
import LandingPage from './Components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <div>
      {/* <GlobalStyle/> */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>

        </Routes>
    </div>
  );
}

export default App;
