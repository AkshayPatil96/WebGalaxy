import React from 'react'
import {Navigation} from '../components/navbar/navigationBar'
import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../pages/homepage/homepage'
import { IntroPage } from '../pages/contentPage/intro'


export const MainRouter = () => {
  
  return (
   <>
   <Navigation/>
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path={`/:tech`} element={<IntroPage/>}></Route>
   </Routes>
   </>
  )
}
