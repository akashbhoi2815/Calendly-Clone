
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { IndividualPage } from "./Individual/IndividualPage";
import { Login } from "./Login/Login";
import { TeamsPage } from "./Teams/TeamsPage";
import { SignUp } from "./SignUp/SignUp";
import AfterLogin from "./Login/user_login/AfterLogin";
import { Price } from "./Price/Pages";
import CalendlyHomePage from "./CalendlyHomePage/CalendlyHomePage";
import { CreateEventPage } from "./CreateEventPage/CreateEventPage";
import { AddEventPage } from "./AddEventPage/AddEventPage";
import { MyAccount } from "./MyAccount/MyAccount";
import { ShowCalendar } from './ViewBooking/ShowCalendar'
import UserRoute from "./UserRoute";


import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../redux/firebase";
import { setUser } from "../redux/authReducer/action";
import { EditPage } from "./EditPage";

export const MainRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/individual" element={<IndividualPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/price" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user_login_page" element={<AfterLogin />} />
        <Route
          path="/calendly_homepage"
          element={
            <UserRoute>
              <CalendlyHomePage />
            </UserRoute>
          }
        />
        <Route
          path="/create_event"
          element={
            <UserRoute>
              <CreateEventPage />
            </UserRoute>
          }
        />
        <Route
          path="/add_event"
          element={
            <UserRoute>
              <AddEventPage />
            </UserRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <UserRoute>
              <MyAccount />
            </UserRoute>
          }
        />
        <Route
          path="/editpage/:id"
          element={
            <UserRoute>
              <EditPage />
            </UserRoute>
          }
        />
         <Route
          path="/booking_page"
          element={
            <UserRoute>
              <ShowCalendar/>
            </UserRoute>
          }
        />
      </Routes>
    </>
  );
};
