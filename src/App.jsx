import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Slider from "react-slick";
import {
  BrowserRouter,Routes,Route,Link
} from 'react-router-dom' 

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
    {/* <Home/> */}
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
