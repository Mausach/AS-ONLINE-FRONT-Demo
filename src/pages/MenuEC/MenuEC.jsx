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
      
      //es7ado para con7rolar si se carga una nueva empresa
      const [nuevaEmpresaCargada, setNuevaEmpresaCargada] = useState(false);

      const navigate = useNavigate();

    //para la paginacion de todo el menu
    const empresasPorPagina = 6; // Número de empresas por página
    //para el paginado
    const [numPage, setNumPage] = useState(1);


const startIndex = (numPage - 1) * empresasPorPagina;
const endIndex = startIndex + empresasPorPagina;
const EmpresasPagina = Array.isArray(cargarEmpresas) ? cargarEmpresas.slice(startIndex, endIndex) : [];
const numPaginas = Math.ceil((Array.isArray(cargarEmpresas) ? cargarEmpresas.length : 0) / empresasPorPagina);

    //para cambiar de pagina
    const cambiarPagina = (pageNumber) => {
        setNumPage(pageNumber);
        // Aquí puedes realizar alguna acción adicional, como obtener los datos de la página seleccionada
        console.log('Página cambiada:', pageNumber);
    };

    const Paginacion = () => {
        return (
            <Pagination className='d-flex align-items-center justify-content-center custom-pagination' border="light">
                {Array.from({ length: numPaginas }).map((_, index) =>(
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
              {EmpresasPagina.length > 0 ? ( // Con7rolamos si hai empresas
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
      

useEffect(() => {
  if (nuevaEmpresaCargada) {
    cargarEmpresasDB(setCargarEmpresas, navigate, usuarioID);
    setNuevaEmpresaCargada(false);
  } else {
    cargarEmpresasDB(setCargarEmpresas, navigate, usuarioID);
  }

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
  }
}, [nuevaEmpresaCargada]);

  return (
    <div className='text-light'>
      <BrandMenu usuarioID={usuarioID} setNuevaEmpresaCargada={setNuevaEmpresaCargada}/>
      {cargarcards_Empresas()}
      
      <div>
       
      </div>
      
    </div>
  )


}




