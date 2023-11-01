import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { cargarEmpresasDB } from './Helpers/cargarEmpresasDB';
import { CardEmpresas } from './Componentes/CardEmpresas';
import { BrandMenu } from './Componentes/Navbar';

export const MenuEC = () => {

  const location = useLocation();

  const usuarioID = location.state;//recibe alusuario

  console.log(usuarioID);

      //estado para guardar las empresas traidos del backend
      const [cargarEmpresas, setCargarEmpresas] = useState([]);

      const navigate = useNavigate();

    //para la paginacion de todo el menu
    const empresasPorPagina = 6; // Número de empresas por página
    //para el paginado
    const [numPage, setNumPage] = useState(1);

    const startIndex = (numPage - 1) * empresasPorPagina;
    const endIndex = startIndex + empresasPorPagina;
    const EmpresasPagina = cargarEmpresas.slice(startIndex, endIndex);
    const numPaginas = Math.ceil(cargarEmpresas.length / empresasPorPagina);
    //fin de datos para paginacion

    const cambiarPagina = (pageNumber) => {
        setNumPage(pageNumber);
        // Aquí puedes realizar alguna acción adicional, como obtener los datos de la página seleccionada
        console.log('Página cambiada:', pageNumber);
    };

    const Paginacion = () => {
        return (
            <Pagination className='d-flex align-items-center justify-content-center custom-pagination' border="light">
                {Array.from({ length: numPaginas }).map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === numPage}
                        onClick={() => cambiarPagina(index + 1)}
                        className='text-center col-2' >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        );
    };


      const cargarcards_Empresas = () => {
        return (
          <div>
              <Container className='mt-5 p-3'>
              {EmpresasPagina.length > 0 ? ( // Check if EmpresasPagina has items
          <div>
            <Row>
              {EmpresasPagina.map((Empresa) => (
                <Col key={Empresa.id}>
                  <CardEmpresas Empresa={Empresa} navigate={navigate} />
                </Col>
              ))}
            </Row>
            <Row>
              {Paginacion()}
            </Row>
          </div>
        ) : (
          <Alert variant='danger'>
            <h5>No hay empresas disponibles, por favor dirijase al menu para dar de alta una empresa
        </h5>
            
        </Alert>
        )}
              </Container>
          </div>
          )
      }
      //console.log(usuarioID);


      useEffect(() => {

       // setTimeout(() => {
         //   setLoading(false);
        //}, 2000);
        //fin de animacion cargando

        //EstadoPago(navigate)

        if (usuarioID) {
          cargarEmpresasDB(setCargarEmpresas, navigate, usuarioID);
        }
        

    }, []);

    /*
     useEffect(() => {
    if (condicionParaRecargar) {
      window.location.reload();
    }
  }, [condicionParaRecargar]);

  return <div>Contenido de tu componente</div>;
}
      */
      



  return (
    <div className='text-light'>
      <BrandMenu usuarioID={usuarioID}/>
      {cargarcards_Empresas()}
      
      <div>
       
      </div>
      
    </div>
  )


}




