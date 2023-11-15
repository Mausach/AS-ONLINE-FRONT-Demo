import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { CardSucursales } from './Componentes/CardSucursales';
import { cargarSucursalesDB } from './Helpers/cargarSucursalesDB';
import { NavBarSuc } from './Componentes/NavBarSuc';

export const MenuSucursales = () => {

    const location = useLocation();

  const Empresa = location.state;//recibe la empresa

  //estado para guardar las sucursales traidos del backend
  const [cargarSucursales, setCargarSucursales] = useState([]);

  const [nuevaSucursalCargada, setNuevaSucursalCargada] = useState(false);

  const navigate = useNavigate();

  //funcion que dibujara las cards
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

  // Checkea si hai algo en sucursales
  const noSucursales = Object.keys(gruposSindicatos).length === 0;

  // Define un objeto para mapear los ID de sindicatos a nombres es7o depende de los sindi que hai en el sis7ema i se 7raen de la DB
  const nombresSindicatos = {
    '1': 'Sindicato sgo del estero',
    '2': 'Sindicato la banda',
  };

  // Renderiza las tarjetas agrupadas por "id_sindicato"
  return (
    <div>
      <Container className='mt-5 p-3'>
      {noSucursales ? (
          <Alert variant='danger'>
            <h5>No hay sucursales disponibles, diríjase a Menu para dar de alta su sucursal central</h5>
          </Alert>
        ) : (
          
          Object.keys(gruposSindicatos).map((idSindicato) => (
            
            <div key={idSindicato}>
              <h1 className='text-dark'>Sindicato: {nombresSindicatos[idSindicato] || `ID: ${idSindicato}`}</h1>
              <Row>
                {gruposSindicatos[idSindicato].length > 0 ? (
                  gruposSindicatos[idSindicato].map((Sucursal) => (
                    <CardSucursales Sucursal={Sucursal} navigate={navigate} Empresa={Empresa} />
                  ))
                ) : null /* Render nothing here because there are no sucursales for this sindicato */}
              </Row>
            </div>
          ))
        )}
        <Row>
          {/*Paginacion()*/}
        </Row>
      </Container>
    </div>
  );
};



 useEffect(() => {
  if (nuevaSucursalCargada) {
    cargarSucursalesDB(setCargarSucursales, navigate, Empresa.id);
    setNuevaSucursalCargada(false);
  } else {
    cargarSucursalesDB(setCargarSucursales, navigate, Empresa.id);
  }
/* lo de abajo es para el paginado por si le ponemos
  // Calcula el número de páginas actualizado
  const newNumPaginas = Math.ceil(cargarEmpresas.length / empresasPorPagina);

  // Si el número de páginas ha cambiado, verifica si debes actualizar el número de página actual
  if (newNumPaginas !== numPaginas) {
    if (numPage > newNumPaginas) {
      // Si el número de página actual es mayor que el nuevo número de páginas, redirige a la última página
      setNumPage(newNumPaginas);
    }
    setNumPaginas(newNumPaginas);
  }

  // Verifica si la página actual está llena y si hay más empresas que no se muestran
  if (EmpresasPagina.length === empresasPorPagina && startIndex + empresasPorPagina < cargarEmpresas.length) {
    setNumPage(numPage + 1); // Incrementa el número de página
    
  }*/
}, [nuevaSucursalCargada]);

  return (
    <div className='text-light container-fluid'>
      
      <h1>{Empresa.nombrefantasia}</h1>
<<<<<<< HEAD
      <NavBarSuc Empresa={Empresa} navegate={navigate}/>
=======
      <NavBarSuc Empresa={Empresa} setNuevaSucursalCargada={setNuevaSucursalCargada}/>
>>>>>>> d8782e0de8e59fc696e203ede3fe47d846a1b4dd
      
      {cargarcards_Sucursales()}
      
    </div>
  )


}