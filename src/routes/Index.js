import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import pages
import Home from "../pages/Home";
import About from "../pages/About";
import AddBlog from "../pages/AddBlog";
import NotFound from "../pages/NotFound";
import Navbar from '../layout/Navbar';
import Protected from './Protected';
const Index = () => {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  return (
    <BrowserRouter>
    <Navbar/>
    {isLoggedIn? <button style={{backgroundColor:"red", fontWeight: "bold"}} onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Logout</button>: <button style={{backgroundColor:"blue", fontWeight: "bold"}} onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Login</button>}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}>
        <AddBlog/>
      </Protected>} />
      <Route path='/about' element={<About/>} />
      <Route path='/*' element={<NotFound/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default Index