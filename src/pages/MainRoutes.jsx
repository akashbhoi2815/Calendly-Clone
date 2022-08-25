import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { HomePage } from './HomePage/HomePage'
import { IndividualPage } from './Individual/IndividualPage'
import { Login } from './Login/Login'
import { TeamsPage } from './Teams/TeamsPage'
import { SignUp } from './SignUp/signUp'



export const MainRoutes = () => {
  return (
   <>
   <div><Navbar/></div>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/individual' element={<IndividualPage/>}/>
        <Route path='/teams' element={<TeamsPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>

    </Routes>
    </>
  )
}
