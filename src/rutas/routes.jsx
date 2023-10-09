import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLogin } from '../pages/HomeLogin/HomeLogin'
import { RegisterEC } from '../pages/ReegisterEC/RegisterEC'
import { RegisterSD } from '../pages/RegisterSD/RegisterSD'

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path="/*" element={<HomeLogin/>} />
          <Route path="/register" element={<RegisterEC />} />
          <Route path="/registroSindicato" element = {<RegisterSD/>} />
          
  
        </Routes>
      </BrowserRouter>
    )
  }