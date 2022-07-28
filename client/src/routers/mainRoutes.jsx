import React from 'react'
import {Navigation} from '../components/navbar/navigationBar'
import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../pages/homepage/homepage'
import { ContentPage } from '../pages/contentPage/content'


export const MainRouter = () => {
  
  return (
   <>
   <Navigation/>
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path={`/:tech`} element={<ContentPage/>}></Route>
   </Routes>

   </>
  )
}
