import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from './comp/armadopdf';
import { useLocation } from 'react-router-dom';


export const Pdf = () => {

  const location = useLocation();

  const ddjjC = location.state;//recibe la cabezera o resumen

  return (
    <div className='text-dark container-fluid'>
       <PDFViewer width="100%" height="600">
      <MyPDF ddjjC={ddjjC}/>
    </PDFViewer>
      
    </div>
  )


}