import { Route, Routes } from 'react-router-dom';
import GlobalStyle from "./IndexStyled.jsx";
import Home from './Components/Home/Home'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
