import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Gallery from './pages/Gallery/Gallery';
import Surah from './pages/Surah/Surah';
import Film from './pages/Film/Film';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/surah' element={<Surah/>} />
      <Route path='/film' element={<Film/>} />
    </Routes>
    </>
  );
}

export default App;
