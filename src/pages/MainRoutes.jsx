import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Price } from './Price/Pages'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/pricing" element={<Price/>} ></Route>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
 
    </Routes>
  )
}
