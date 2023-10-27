import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import { guardarDatosEnCarrito } from '../helpers/OperacionesDelCarrito';

export const CardEmpresas = ({ Empresa, navigate }) => {

    const ir_Sucursales = () => {
        navigate('/sucursales', { state: Empresa })
      }

    return (
        <div>

            <Card className='bg-light text-dark shadow p-3 mb-5 bg-white rounded m-3 col-3 p-2 col-md-4 col-xl-3' border="light" style={{ width: '20rem' }}>
                {/* <Card.Img variant="top" src={producto.url_img} /> */}
                <Card.Body>
                    <Card.Title>{Empresa.nombrefantasia}</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        {Empresa.telefono}
                    </Card.Text>
                    <Card.Text>
                        Razon social : {Empresa.razonsocial}
                    </Card.Text>
                    <Card.Text>
                        CUI7 : ${Empresa.cuit}
                    </Card.Text>

                    <Button variant="dark" className="" onClick={ir_Sucursales}>
                        <h6>
                            
                            ver sucursales
                        </h6>
                    </Button>
                </Card.Body>
            </Card>

        </div>
    )
}