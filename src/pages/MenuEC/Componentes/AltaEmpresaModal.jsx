import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import SelectProvincia from './BuscadorSelecProv';
import SelectLocalidades from './BuscadorSelecLoc';
import { starCrearEmpresa } from '../Helpers/starCrearEmpresa';
import { useNavigate } from 'react-router-dom';


export const AltaEmpresaModal =({ showModal, handleCloseModal, usuarioID, setNuevaEmpresaCargada })=> {

  //state para empresa
  const [empresa, setEmpresa] = useState({
    id_Esutdio_Conable: usuarioID,
    cuit: "",
    razonsocial: "",
    nombrefantasia: "",
    telefono: "",
    
});

const navigate = useNavigate();//para navegar a o7ras ru7as


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
      navigate,
      setNuevaEmpresaCargada
    );

    handleCloseModal()

    
  }
}

  // Agrega aquí el contenido de tu modal

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        
        <Modal.Title>Alta de empresa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Ponemo el form a den7ro del modal */}
        <Form onSubmit={onSubmit}>      

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>
        
                        CUIT</Form.Label>
                    <Form.Control type="text" name='cuit' placeholder="N° de cuit sin -" maxLength={13} value={empresa.cuit} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        Nombre de fantasia</Form.Label>
                    <Form.Control type="text" name='nombrefantasia' placeholder="Nombre de fantasia" minLength={3} maxLength={20} value={empresa.nombrefantasia} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        Razon social</Form.Label>
                    <Form.Control type="text" name='razonsocial' placeholder="Razon social" minLength={5} maxLength={20} value={empresa.razonsocial} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        Calle</Form.Label>
                    <Form.Control type="text" name='calle' placeholder="calle" minLength={5} maxLength={20} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        Nro</Form.Label>
                    <Form.Control type="number" name='nro' placeholder="nro" minLength={5} maxLength={20} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
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
                        
                        Codigo postal</Form.Label>
                    <Form.Control type="number" name='codigo postal' placeholder="codigo postal" minLength={4} maxLength={6} /*value={user.password} onChange={onInputChange}*/ />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        telefono</Form.Label>
                    <Form.Control type="text" name='telefono' placeholder="telefono" minLength={4} maxLength={11} value={empresa.telefono} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                       
                        email de la empresa</Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" maxLength={30} /*value={user.password} onChange={onInputChange}*/ />
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
