import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav } from 'react-bootstrap';
import { AltaEmpresaModal } from './AltaEmpresaModal';
//import Modal from 'react-bootstrap/Modal';


export const BrandMenu =( {usuarioID} ) => {//se podria recibir nombre i logo del es7udio con7able para el navbar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //para modal
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  console.log("usuarioID:", usuarioID);
  

  return (
    <>     
      <Navbar className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
        <Button variant="outline-light" onClick={handleShow}>
        Menu
      </Button>
          <Navbar.Brand  href="#home" className="ms-auto">
            
            Esstudio Contable
            {' '}
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
          
        </Container>
      </Navbar>

      

      <Offcanvas data-bs-theme="dark" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=''>Menu</Offcanvas.Title>
          <hr className=''></hr>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <hr className=''></hr>
        <Nav.Link>

        <Button className='m-2' variant="outline-light" onClick={handleShowModal}>
          Alta de empresa
          </Button>
          
          </Nav.Link>

      <Nav.Link href="#features">

      <Button className='m-2' variant="outline-light">
        ver declaracioner realizadas
        </Button>

        </Nav.Link> 

        </Offcanvas.Body>
      </Offcanvas>


      <AltaEmpresaModal showModal={showModal} handleCloseModal={handleCloseModal} usuarioID={usuarioID}/>
    </>
  );
}
