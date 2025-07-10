import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { routes } from '..'
import HomePage from '../../pages/homepage/HomePage'
import Login from '../../pages/loginpage/login'
import Aboutus from '../../pages/aboutus/Aboutus'

export const AppRouter = () => {
  const [index,setIndex]=useState(0);
  return (
    <BrowserRouter>
        <Routes>
            <Route path={routes.home} element={<HomePage index={index} handleHome={e => console.log(e)}/>}/>
            <Route path={routes.login} element={<Login/>}/>
            <Route path={routes.aboutus} element={<Aboutus handleindex={e => console.log(e)} index={index}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

