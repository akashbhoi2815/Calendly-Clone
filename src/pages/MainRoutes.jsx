import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TeamsPage } from './Teams/TeamsPage'


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'/>
        <Route/>
        <Route path='/teams' element={<TeamsPage/>}/>
        <Route/>
        <Route/>
 
    </Routes>
  )
}
