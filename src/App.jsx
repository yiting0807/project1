import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Japan from './pages/Japan'
import Slider from "react-slick";
import {
  BrowserRouter,Routes,Route,Link
} from 'react-router-dom' 



function App() {
  
  return (
    <BrowserRouter>
    <Link to='/'><img src="images/yt.png" width="10px"/></Link>
    <Link to='/japan'>japan</Link>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/japan" element={<Japan/>}/>
     {/* <Home/> */}
       
    </Routes>
   </BrowserRouter>
  );
}

export default App
