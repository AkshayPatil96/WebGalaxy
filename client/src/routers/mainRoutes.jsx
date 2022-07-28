import React from 'react'
import {Navigation} from '../components/navbar/navigationBar'
import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../pages/Homepage/homepage'


export const MainRouter = () => {
  return (
   <>
   <Navigation/>
   <Routes>
    <Route path='/' element={<Homepage/>}></Route>
   </Routes>
   </>
  )
}
