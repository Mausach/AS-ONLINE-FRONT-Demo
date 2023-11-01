import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import SelectProvincia from './BuscadorSelecProv';
import SelectLocalidades from './BuscadorSelecLoc';
import Select from 'react-select';
import { starCrearSucursal } from '../Helpers/starCrearSucursal';
import { starCrearEmpleado } from '../Helpers/starCrearEmpleado';
//import { starCrearEmpresa } from '../Helpers/starCrearEmpresa';


export const AltaDeEmpleado =({ showModal, handleCloseModal, Sucursal })=> {

  //state para sucursales
  const [empleado, setEmpleado] = useState({ //se debe modificar los da7os de la sucursal dado a que el modlo no es7a 7erminado
    dni:"",
    cuil:"",
    nombre:"",
    apellido:"",
    sucuId:Sucursal.id
    
});

//selec7 del sindica7o
const options = [
    { value: 1, label: 'La Banda' },
    { value: 2, label: 'Frias' },
    { value: 3, label: 'Ojo de agua' },
// Agrega más opciones según sea necesario
  // Agrega más provincias según sea necesario
];

const [selectedOption, setSelectedOption] = useState(null);

const handleSindicatoChange = (selectedOption) => {
    setEmpleado({
      ...empleado,
      id_Sindicato: selectedOption.value, // Establece el valor seleccionado del sindicato en el estado
    });
    setSelectedOption(selectedOption)
  };

 //controla los cambios que se hagan en los campos del formulario
 const onInputChange = (e) => {
  setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
  });
}


//captura lo el formulario y verifica los campos lanzando una alerta con swal
const onSubmit = (e) => {//solo con7rolamos los campos que de momen7o 7enemos en el backend de empresa que no son 7odos los del formulario
  e.preventDefault();
  //fal7a asignar el sindica7o id an7es de corroborar 
  
  if (
    empleado.dni.trim()==="" ||
    empleado.cuil.trim() === "" ||
    empleado.nombre.trim()=== "" ||
    empleado.apellido.trim=== ""
  ) {
    console.log(sucursal.id)
    swal("ERROR", "Todos los campos son obligatorios", "error");
  } else {
    
    
    // Realiza la llamada al método que valida el CUIT aquí
    // ...
    
    starCrearEmpleado(
      empleado.dni,
      empleado.cuil,
      empleado.nombre,
      empleado.apellido,
      Sucursal.id
    );
  }
}



  // Agrega aquí el contenido de tu modal

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Alta de Sucursales</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Agrega los campos y contenido de tu modal aquí */}
        <Form onSubmit={onSubmit}>      

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-person-fill"> </i>
                        DNI</Form.Label>
                    <Form.Control type="text" name='dni' maxLength={8} value={empleado.dni} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        CUIL</Form.Label>
                    <Form.Control type="text" name='cuil' placeholder="coloque el numero sin -" minLength={11} maxLength={11} value={empleado.cuil} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Nombre</Form.Label>
                    <Form.Control type="text" name='nombre' placeholder="Diego" minLength={5} maxLength={20} value={empleado.nombre} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Apellido</Form.Label>
                    <Form.Control type="text" name='apellido' placeholder="Perez" minLength={5} maxLength={20} value={empleado.apellido} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Piso</Form.Label>
                    <Form.Control type="number" name='piso' placeholder="piso" minLength={5} maxLength={20} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>
                <br></br>

                <SelectProvincia/>

                <br></br>

                {/*<SelectLocalidades sucursal={sucursal} setSucursal={setSucursal}/>*/}

                <br></br>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Codigo postal</Form.Label>
                    <Form.Control type="number" name='codigo postal' placeholder="codigo postal" minLength={4} maxLength={6} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        telefono</Form.Label>
                    <Form.Control type="text" name='telefono' placeholder="telefono" minLength={4} maxLength={11} /*value={empresa.telefono} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" maxLength={30} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                <Select
      value={selectedOption}
      //onChange={handleSindicatoChange}
      options={options}
      isSearchable={true} // Activa la funcionalidad de búsqueda
      name='id.localidad'
      placeholder="Localidad..."
      className="text-dark"
      
    />
                    </Form.Group>

                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-dark'>
                        Faltan solisitar datos.... tenga en cuenta que es una demo
                        </Form.Label>
                    
                </Form.Group>

            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="primary"  onClick={onSubmit}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}