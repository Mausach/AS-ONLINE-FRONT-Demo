import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import swal from 'sweetalert';



export const Footer = () => {

  

  const ir_404 = (e) => {
    e.preventDefault();
    swal("Error 404", "Pagina destino no encontrada", "error");
  }


  const ir_Register = () => {
    navigate('/register')
  }

  const ir_Home = () => {
    navigate('/home', { state: emailUs })
  }

  return (
    <div>
      <footer className='bg-dark text-white fixed-bottom'>
      <hr></hr>
          
          <div className="text-white rounded d-flex justify-content-center align-items-center">
            <p> Todos los derechos reservados. <b>Eon-devs &copy;</b></p>
          </div>
          

          
          
          
        
        
        </footer>

</div>
)
}