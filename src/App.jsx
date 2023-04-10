import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Japan from './pages/Japan'
import Login from './pages/Login'
import Slider from "react-slick";
import {
  BrowserRouter,Routes,Route,Link
} from 'react-router-dom' 



function App() {
  
  return (
    <BrowserRouter>
    <Link to='/'><img src="images/yt.png" width="10px"/></Link>
    <Link to='/japan'>japan</Link>
    {/* <Link to='/home1'>login</Link> */}
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/japan" element={<Japan/>}/>
       {/* <Route path="/home1" element={<Home1/>}/>  */}
     {/* <Home/> */}
       
    </Routes>
   </BrowserRouter>
  );
}

export default App
