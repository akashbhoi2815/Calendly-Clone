import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { HomePage } from './HomePage/HomePage'

export const MainRoutes = () => {
  return (
   <>
   <div><Navbar/></div>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
 
    </Routes>
    </>
  )
}
