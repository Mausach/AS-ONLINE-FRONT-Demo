import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from './comp/armadopdf';

export const Pdf = () => {

  return (
    <div className='text-dark container-fluid'>
       <PDFViewer width="100%" height="600">
      <MyPDF />
    </PDFViewer>
      
    </div>
  )


}