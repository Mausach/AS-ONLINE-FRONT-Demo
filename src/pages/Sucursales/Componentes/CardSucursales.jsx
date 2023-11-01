import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { AltaDeEmpleado } from './AltaDeEmpleado';
//import { guardarDatosEnCarrito } from '../helpers/OperacionesDelCarrito';

export const CardSucursales = ({ Sucursal, navigate, Empresa }) => {

    const ir_Declaracion = () => {
      //armo un obje7o para pasar da7os de empresa i sucursales
      const datosEmpSuc = {
        empresa: Empresa,
        sucursal: Sucursal,
      };

        navigate('/Declaraciones', { state: datosEmpSuc })
      }

      const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

    return (
        <div>

            
            <Card className='bg-light text-dark shadow p-3 mb-3 bg-white rounded'>
      <Card.Body>
        <Row>
          <Col sm={4}>
            <Card.Title>{Sucursal.nombre}</Card.Title>
            <Card.Text>ID de localidad: {Sucursal.id_localidad}</Card.Text>
          </Col>
          <Col sm={8}>
            <Button className='m-2' variant="dark" onClick={ir_Declaracion}>DDJJ</Button>
            <Button className='m-2' variant="dark">Baja de empleado</Button>
            <Button className='m-2' variant="outline-success" onClick={handleShowModal}>Alta de empleado</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    <AltaDeEmpleado showModal={showModal} handleCloseModal={handleCloseModal} Sucursal={Sucursal}/>
      

        </div>
    )
}