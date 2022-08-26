import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { HomePage } from './HomePage/HomePage'
import { IndividualPage } from './Individual/IndividualPage'
import { Login } from './Login/Login'
import { TeamsPage } from './Teams/TeamsPage'
import { SignUp } from './SignUp/SignUp'
import AfterLogin from './Login/user_login/AfterLogin'
import Footer from '../components/Footer'
import { Price } from './Price/Pages'



export const MainRoutes = () => {
  return (
   <>
   <div><Navbar/></div>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/individual' element={<IndividualPage/>}/>
        <Route path='/teams' element={<TeamsPage/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/user_login_page' element={<AfterLogin/>}/>

    </Routes>
    <div><Footer/></div>
    </>
  )
}
