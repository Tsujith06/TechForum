import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { routes } from '..'
import HomePage from '../../pages/homepage/HomePage'
import Login from '../../pages/loginpage/login'
import Aboutus from '../../pages/aboutus/Aboutus'
import Team from '../../pages/teampage/Team'
import Activity from '../../pages/activitypage/Activitypage'
import Contact from '../../pages/contact/Contact'
import Events from '../../pages/events/Events'
export const AppRouter = () => {
  const [index,setIndex]=useState(0);
  return (
    <BrowserRouter>
        <Routes>
            <Route path={routes.home} element={<HomePage index={index} handleHome={e => console.log(e)}/>}/>
            <Route path={routes.login} element={<Login/>}/>
            <Route path={routes.aboutus} element={<Aboutus handleindex={e => console.log(e)} index={index}/>}/>
            <Route path={routes.team} element={<Team/>}/>
            <Route path={routes.activity} element={<Activity/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.events} element={<Events/>}/>

        </Routes>
    </BrowserRouter>
  )
}

