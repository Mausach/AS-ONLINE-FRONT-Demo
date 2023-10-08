import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLogin } from '../pages/HomeLogin/HomeLogin'
import { RegisterEC } from '../pages/ReegisterEC/RegisterEC'

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path="/*" element={<HomeLogin/>} />
          <Route path="/register" element={<RegisterEC />} />
          
  
        </Routes>
      </BrowserRouter>
    )
  }