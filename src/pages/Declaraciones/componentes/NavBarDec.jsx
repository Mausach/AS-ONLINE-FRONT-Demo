import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { AltaDeEmpleado } from '../../Sucursales/Componentes/AltaDeEmpleado';




export const NavBarDec =({empresa,sucursal,navegate}) => {//se podria recibir nombre i logo del es7udio con7able para el navbar
  
 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //para modal de al7a de empleado
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
  
  const volver = () => {
    navegate('/sucursales', { state: empresa})
  }

  return (
    <>     
      <Navbar className="bg-body-tertiary mb-5" fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
        <Button className='m-2' variant="outline-light" onClick={volver}>
        <i class="bi bi-arrow-left-square-fill"> </i>
        Volver
      </Button>



        <Button className='m-2' variant="outline-light" onClick={handleShow}>
        <i class="bi bi-list"> </i>
        Menu
      </Button>
          <Navbar.Brand  href="#home" className="ms-auto">
            
            
            
            {sucursal.nombre+' '}
            <i class="bi bi-boxes"></i>

{/*
<img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
*/}
            
            
          </Navbar.Brand>
          
        </Container>
      </Navbar>

      

      <Offcanvas data-bs-theme="dark" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <hr></hr>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <hr></hr>
        <Nav.Link>

        <Button className='m-2' variant="outline-light" onClick={handleShowModal}>
          Alta de Empleado
          </Button>
          
          </Nav.Link>

      <Nav.Link >

      <Button className='m-2' variant="outline-light">
        ver declaracioner realizadas
        </Button>

        </Nav.Link>

        <Nav.Link >

        Estas opciones son solo de ejemplo...

        </Nav.Link>  

        </Offcanvas.Body>
      </Offcanvas>


      <AltaDeEmpleado showModal={showModal} handleCloseModal={handleCloseModal} Sucursal={sucursal}/>
      
      

      
    </>
  );
}