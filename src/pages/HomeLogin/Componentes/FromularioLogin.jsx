import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { starLogin } from "../Helpers/StarLogin";
// importando react-bootstrap
import Form from "react-bootstrap/Form";

export const ForularioLogin = () => {
  //state para usuario e email del usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //borrar desp inicio

  function irRegistro() {
    navigate("/register");
  }

  //controla los cambios que se hagan en los campos del formulario
  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //captura lo el formulario y verifica los campos lanzando una alerta con swal
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email.trim() === "" || user.password.trim() === "") {
      swal("ERROR", "todos los campos son obligatorios", "error");
    } else {
      //swal("FUNCIONA", user.email +" "+ user.password, "success");
      starLogin(user.email, user.password, navigate); //llama al metodo starLogin del helper
    }
  };

  return (
    <div>
        
    <div className="d-flex align-items-center justify-content-center customHeigth ">
      
      <Form className=" p-5 p-sm-4 rounded border border-white m-3 shadow " onSubmit={onSubmit}>
      
      <h1 className="bo7 text-white p-2 w-100">As-Online</h1>
          
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <i className="bi bi-person-fill"> </i>
          <Form.Label className="text-dark" >Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="email"  name="email" value={user.email}
          onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <i className="bi bi-lock-fill"> </i>
          <Form.Label   className="text-dark">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name="password" value={user.password}
          onChange={onInputChange}/>
          <div className="pt-3">

          <a href="#" className="text-dark">
            ¿Olvidaste tu contraseña? Clic aquí
          </a>
          </div>
        </Form.Group>

        <div className="text-center">
          <button type="submit" className="btn btn-outline-primary mt-3">
            Ingresar
          </button >
          <div>
            
        </div>
        </div>        
      </Form>
      
        
    </div>
    <div className="text-center">
    
       ¿Eres Nuevo? por favor
<button className="btn btn-outline-primary m-2" onClick={irRegistro}>
      Registrate
          </button> aquí.
    </div>
    </div>
    
  );
};
