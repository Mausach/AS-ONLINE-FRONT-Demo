import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { CardSucursales } from './Componentes/CardSucursales';
import { cargarSucursalesDB } from './Helpers/cargarSucursalesDB';
import { NavBarSuc } from './Componentes/NavBarSuc';

export const MenuSucursales = () => {

    const location = useLocation();

  const Empresa = location.state;//recibe la empresa

  //estado para guardar las sucursales traidos del backend
  const [cargarSucursales, setCargarSucursales] = useState([]);

  const navigate = useNavigate();

  //funcion que dibujara las cards
  /*
  const cargarcards_Sucursales = () => {
    return (
      <div>
          <Container className='mt-5 p-3'>
              <Row>
                  {cargarSucursales.map((Sucursal) => {
                          return <Col key={Sucursal.id} >
                            <CardSucursales Sucursal={Sucursal} navigate={navigate} />
                              
                          </Col>
                      
                  })}
              </Row>
              <Row>
                  {Paginacion()}
              </Row>
          </Container>
      </div>
      )
  }*/

  const cargarcards_Sucursales = () => {
  // Organiza las sucursales en grupos según el campo "id_sindicato"
  const gruposSindicatos = {};

  cargarSucursales.forEach((Sucursal) => {
    const idSindicato = Sucursal.id_Sindicato;

    if (!gruposSindicatos[idSindicato]) {
      gruposSindicatos[idSindicato] = [];
    }

    gruposSindicatos[idSindicato].push(Sucursal);
  });

  // Renderiza las tarjetas agrupadas por "id_sindicato"
  return (
    <div>
      <Container className='mt-5 p-3'>
        {Object.keys(gruposSindicatos).map((idSindicato) => (
          <div key={idSindicato}>
            <h1 className='text-dark'>Sindicato id:{idSindicato}</h1>
            <Row>
              {gruposSindicatos[idSindicato].map((Sucursal) => (
                
                  <CardSucursales Sucursal={Sucursal} navigate={navigate} Empresa={Empresa} />
                
              ))}
            </Row>
          </div>
        ))}
        <Row>
          {/*Paginacion()*/}
        </Row>
      </Container>
    </div>
  );
};


  useEffect(() => {

    // setTimeout(() => {
      //   setLoading(false);
     //}, 2000);
     //fin de animacion cargando

     //EstadoPago(navigate)

     if (Empresa.id) {
       cargarSucursalesDB(setCargarSucursales, navigate, Empresa.id);
     }
     

 }, [Empresa.id]);

  return (
    <div className='text-light container-fluid'>
      
      <h1>{Empresa.nombrefantasia}</h1>
      <NavBarSuc Empresa={Empresa}/>
      
      {cargarcards_Sucursales()}
      
    </div>
  )


}