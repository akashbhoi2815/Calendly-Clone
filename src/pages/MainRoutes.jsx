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
import CalendlyHomePage from './CalendlyHomePage/CalendlyHomePage'
import { CreateEventPage } from './CreateEventPage/CreateEventPage'
import { AddEventPage } from './AddEventPage/AddEventPage'
import { MyAccount } from './MyAccount/MyAccount'



export const MainRoutes = () => {
  return (
   <>
   
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/individual' element={<IndividualPage/>}/>
        <Route path='/teams' element={<TeamsPage/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/user_login_page' element={<AfterLogin/>}/>
        <Route path='/calendly_homepage' element={<CalendlyHomePage/>}/>
        <Route path='/create_event' element={<CreateEventPage/>}/>
        <Route path='/add_event' element={<AddEventPage/>}/>
        <Route path='/profile' element={<MyAccount/>}/>
    </Routes>
    </>
  )
}
