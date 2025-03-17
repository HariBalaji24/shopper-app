import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar';
import Addproduct from '../pages/addproduct';
import Listproduct from '../pages/listproducts';
function App() {

  return (
     <div>
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        <Routes>
           <Route path='/addproducts' element={ <Addproduct/>} />
           <Route path='/listproducts' element={ <Listproduct/>} />  
        </Routes>
      </BrowserRouter>
     </div>
  )
   
}

export default App
