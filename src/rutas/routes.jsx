import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLogin } from '../pages/HomeLogin/HomeLogin'
import { RegisterEC } from '../pages/ReegisterEC/RegisterEC'
import { RegisterSD } from '../pages/RegisterSD/RegisterSD'
import { MenuSD } from '../pages/MenuSindicato/MenuSD'
import { MenuSucursales } from '../pages/Sucursales/Sucursales'
import { MenuEC } from '../pages/MenuEC/MenuEC'
import { DeclaracionJ } from '../pages/Declaraciones/Declaracion'
import { Pdf } from '../pages/Pdf/pdf'
import { Admins } from '../pages/Admin/Admin'


export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path="/*" element={<HomeLogin/>} />
          <Route path="/register" element={<RegisterEC />} />
          <Route path="/registroSindicato" element = {<RegisterSD/>} />
          <Route path="/menuEC" element = {<MenuEC/>} />
          <Route path="/menuSD" element = {<MenuSD/>} />
          <Route path="/sucursales" element = {<MenuSucursales/>} />
          <Route path="/Declaraciones" element = {<DeclaracionJ/>} />
          <Route path="/Pdf" element = {<Pdf/>} />
          
          <Route path="/admin" element = {<Admins/>} />
  
        </Routes>
      </BrowserRouter>
    )
  }