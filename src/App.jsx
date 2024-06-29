import { useState } from 'react'
import CartCountries from './components/CartCountries'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Links from './components/link'
export default function App() {

  return (
    <>
     <BrowserRouter>
     {/* <Links></Links> */}
     <Routes>
         <Route path ="/other" element={<CartCountries/>}></Route>
         <Route path ="/Country" element={<Links/>}></Route>
     </Routes>
     </BrowserRouter>



    {/* <CartCountries/> */}
    </>
  )
}

