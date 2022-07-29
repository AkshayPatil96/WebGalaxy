import React from 'react'
import {Navigation} from '../components/navbar/navigationBar'
import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../pages/homepage/homepage'
import { ContentPage } from '../pages/contentPage/content'
import Login from '../components/login/login'
import Register from '../components/register/register'
import Article from '../pages/Article/Article'


export const MainRouter = () => {
  
  return (
   <>
   <Navigation/>
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path={`/:id`} element={<ContentPage/>}></Route>
    <Route path={'/login'} element={<Login/>}></Route>
    <Route path={'/signup'} element={<Register/>}></Route>
    <Route path={'/article'} element={<Article/>}></Route>
   </Routes>
   </>
  )
}
