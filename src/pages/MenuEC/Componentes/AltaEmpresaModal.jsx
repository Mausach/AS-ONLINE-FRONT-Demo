import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import SelectProvincia from './BuscadorSelecProv';
import SelectLocalidades from './BuscadorSelecLoc';
import { starCrearEmpresa } from '../Helpers/starCrearEmpresa';


export const AltaEmpresaModal =({ showModal, handleCloseModal, usuarioID })=> {

  //state para usuario e email del usuario
  const [empresa, setEmpresa] = useState({
    id_Esutdio_Conable: usuarioID,
    cuit: "",
    razonsocial: "",
    nombrefantasia: "",
    telefono: "",
    //mandamos un rol por defec70
});


 //controla los cambios que se hagan en los campos del formulario
 const onInputChange = (e) => {
  setEmpresa({
      ...empresa,
      [e.target.name]: e.target.value,
  });
}


//captura lo el formulario y verifica los campos lanzando una alerta con swal
const onSubmit = (e) => {//solo con7rolamos los campos que de momen7o 7enemos en el backend de empresa que no son 7odos los del formulario
  e.preventDefault();
  
  if (
    !empresa.id_Esutdio_Conable ||
    empresa.cuit.trim() === "" ||
    empresa.razonsocial.trim() === "" ||
    empresa.nombrefantasia.trim() === "" ||
    empresa.telefono.trim() === ""
  ) {
    swal("ERROR", "Todos los campos son obligatorios", "error");
  } else {
    console.log(empresa.id_Esutdio_Conable);
    // Realiza la llamada al método que valida el CUIT aquí
    // ...
    starCrearEmpresa(
      empresa.id_Esutdio_Conable,
      empresa.cuit,
      empresa.razonsocial,
      empresa.nombrefantasia,
      empresa.telefono,
    );
  }
}



  // Agrega aquí el contenido de tu modal

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Alta de empresa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Agrega los campos y contenido de tu modal aquí */}
        <Form onSubmit={onSubmit}>      

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-person-fill"> </i>
                        CUIT</Form.Label>
                    <Form.Control type="text" name='cuit' placeholder="Ejemplo: XX-12345678-X" maxLength={13} value={empresa.cuit} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Nombre de fantasia</Form.Label>
                    <Form.Control type="text" name='nombrefantasia' placeholder="Nombre de fantasia" minLength={3} maxLength={20} value={empresa.nombrefantasia} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Razon social</Form.Label>
                    <Form.Control type="text" name='razonsocial' placeholder="Razon social" minLength={5} maxLength={20} value={empresa.razonsocial} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Calle</Form.Label>
                    <Form.Control type="text" name='calle' placeholder="calle" minLength={5} maxLength={20} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Nro</Form.Label>
                    <Form.Control type="number" name='nro' placeholder="nro" minLength={5} maxLength={20} /*value={user.password} onChange={onInputChange}*/ />
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

                <SelectLocalidades/>

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
                    <Form.Control type="text" name='telefono' placeholder="telefono" minLength={4} maxLength={11} value={empresa.telefono} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        email de la empresa</Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" maxLength={30} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        <i className="bi bi-lock-fill"> </i>
                        Nombre del estudio contable</Form.Label>
                    <Form.Control type="text" name='estudio contable' placeholder="Nombre..." minLength={4} maxLength={6} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
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
