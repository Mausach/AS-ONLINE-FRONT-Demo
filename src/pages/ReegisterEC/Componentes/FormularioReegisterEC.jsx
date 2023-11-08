import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { starLogin } from '../helpers/StarLogin';
import swal from "sweetalert";
import SelectLocalidad from "./BuscadorSelect";
import { starRegister } from "../Helpers/StarRegisterEC";

// Trayendo react-bootstrap
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

export const FormularioReegisterECk = () => {
  //state para usuario e email del usuario
  const [user, setUser] = useState({
    nombreEC: "",
    email: "",
    password: "",
    confirmarPassword: "",
    telefono: "",
    domicilio: "",
    cuit: "",
    localidad: "",
    rol: "Estudio-Contable", //mandamos un rol por defec70
  });

  const navigate = useNavigate();

  //controla los cambios que se hagan en los campos del formulario
  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //captura lo el formulario y verifica los campos lanzando una alerta con swal
  const onSubmit = (e) => {
    console.log(onSubmit)
    e.preventDefault();
    if (
      user.email.trim() === "" ||
      user.password.trim() === "" ||
      user.nombreEC.trim() === "" ||
      user.confirmarPassword.trim() === "" ||
      user.telefono.trim() === "" ||
      user.domicilio.trim() === "" ||
      user.cuit.trim() === ""
      /* user.localidad.trim() === ""*/
    ) {
      
      swal("ERROR", "todos los campos son obligatorios", "error");
    } else {
      //swal("FUNCIONA", user.email + " " + user.password, "success");

      starRegister(
        user.nombreEC,
        user.email,
        user.password,
        user.rol,
        navigate
      ); //llama al metodo starLogin del helper
    }
    
  };

  

  const ir_login = () => {
    navigate("/*");
  };

  return (
    <div className="  p-sm-5 rounded border border-white m-5 shadow">
      <h3 className="text-center">Formulario de Registro</h3>
      {/* Nombre */}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">
            Nombre de estudio contable
          </Form.Label>
          <Form.Control
            type="text"
            name="nombreEC"
            placeholder="Es. Rivadavia"
            maxLength={30}
            value={user.nombreEC}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Correo electronico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="ejemplo@gmail.com"
            minLength={5}
            maxLength={20}
            value={user.email}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* Contraseña */}
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="******"
            minLength={5}
            maxLength={20}
            value={user.password}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* Confirmar constraseña */}
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Confirmar contraseña</Form.Label>
          <Form.Control
            type="password"
            name="confirmarPassword"
            placeholder="******"
            minLength={5}
            maxLength={20}
            value={user.confirmarPassword}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* Telfono */}
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Telefono</Form.Label>
          <Form.Control
            type="number"
            name="telefono"
            placeholder="Telefono"
            minLength={5}
            maxLength={20}
            value={user.telefono}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* Domicilio */}
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">Domicilio</Form.Label>
          <Form.Control
            type="text"
            name="domicilio"
            placeholder=""
            maxLength={30}
            value={user.domicilio}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* CUIT */}
        <Form.Group className="mb-3">
          <Form.Label className="text-dark">CUIT</Form.Label>
          <Form.Control
            type="number"
            name="cuit"
            placeholder="N° de cuit sin -"
            minLength={5}
            maxLength={20}
            value={user.cuit}
            onChange={onInputChange}
          />
        </Form.Group>
        {/* Localidad */}

        <div className="col-12 mt-4">
          Localidad
          <SelectLocalidad />
        </div>
       
        <div className="text-center d-flex mt-4">
        <div className="col-6">
          <button type="submit" className="btn btn-outline-dark">
            Registrar
          </button>
        </div>
        <div className="col-6">
          <button className="btn btn-outline-dark" onClick={ir_login}>
            Cancelar
          </button>
        </div>
        </div>
      </Form>
    </div>

    // <div className='container-sm'>
    //     <form className="p-5 p-sm-4 rounded text-center border border-dark m-3 row" onSubmit={onSubmit}>

    //         <h1 className=''>

    //             As-online
    //         </h1>

    //         <h3 className=''>
    //             <i className="bi bi-person-circle"> </i>
    //             Formulario de Regisrtro
    //         </h3>

    //         <div className='col-6'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark" onSubmit={onSubmit}>

    //                 <i className="bi bi-person-fill"> </i>
    //                 Nombre del Estudio contable

    //             </label>
    //             <input type="text" name="nombreEC" className="form-control mb-3" placeholder="Es. Ribadavia" maxLength={30} value={user.nombreEC} onChange={onInputChange} />

    //         </div>

    //         <div className='col-6'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark">

    //                 Correo electronico

    //             </label>
    //             <input type="email" name="email" className="form-control" placeholder="ejemplo@gmail.com" minLength={5} maxLength={20} value={user.email} onChange={onInputChange} />

    //         </div>

    //         <div className='col-4'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark">

    //                 <i className="bi bi-lock-fill"> </i>
    //                 Contraseña

    //             </label>
    //             <input type="password" name="password" className="form-control" placeholder="******" minLength={5} maxLength={20} value={user.password} onChange={onInputChange} />

    //         </div>

    //         <div className='col-4'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark">

    //                 <i className="bi bi-lock-fill"> </i>
    //                 Confirmar Contraseña

    //             </label>
    //             <input type="password" name="confirmarPassword" className="form-control" minLength={5} maxLength={20} value={user.confirmarPassword} onChange={onInputChange} />

    //         </div>

    //         <div className='col-4'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark">

    //                 telefono

    //             </label>
    //             <input type="number" name="telefono" className="form-control" minLength={5} maxLength={20} value={user.telefono} onChange={onInputChange} />

    //         </div>

    //         <div className='col-6'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark" onSubmit={onSubmit}>

    //                 Domicilio

    //             </label>
    //             <input type="text" name="domicilio" className="form-control mb-3" maxLength={30} value={user.domicilio} onChange={onInputChange} />

    //         </div>

    //         <div className='col-6'>
    //             <label for="exampleFormControlInput1" className="form-label text-dark">

    //                 CUIt

    //             </label>
    //             <input type="number" name="cuit" className="form-control" placeholder='N° de cuit sin -' minLength={5} maxLength={20} value={user.cuit} onChange={onInputChange} />

    //         </div>

    //         <div className='col-12'>
    //             <SelectLocalidad />

    //         </div>

    //         <hr></hr>

    //         <div className="col-6">
    //             <button type="submit" className="btn btn-outline-dark" >Registrar</button>
    //         </div>

    //         <div className="col-6">
    //             <button className="btn btn-outline-dark" onClick={ir_login} >Cancelar</button>
    //         </div>

    //     </form>
    // </div>
  );
};
