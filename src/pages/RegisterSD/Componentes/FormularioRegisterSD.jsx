import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import './FormularioRegisterSD.css'

export const FormularioSD = () => {
  //state para usuario e email del usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  
//va al regis7ro de sindica7o
  function irRegistro() {
    navigate("/registroSindicato");
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
      swal("FUNCIONA", user.email + " " + user.password, "success");

      //fal7a hacer helper i js para el me7odo que va a al back
      //starLogin(user.email, user.password, navigate);//llama al metodo starLogin del helper
    }
  };

  return (
    <div className="container-sm p-5" >
      <form
        className="p-5 p-sm-5 rounded text-center border border-white text-light"
        onSubmit={onSubmit}
      >
        <h1 className="">As-online</h1>

        <h3 className="text-light">
          
          FORMULARIO DE SINDICATO
        </h3>
        <label
          for="exampleFormControlInput1"
          className="form-label"
          onSubmit={onSubmit}
        >
          
          Nombre
        </label>
        <input
          type="text"
          name="Nombre"
          className="form-control mb-2"
          placeholder="Nombre de Sindicato"
          maxLength={30}
        //   value={user.email}
        //   onChange={onInputChange}
        />
         <label for="exampleFormControlInput1" className="form-label">
         
          Nombre Corto
        </label>
        <input
          type="text"
          name="Nombre Corto"
          className="form-control mb-2"
          placeholder="Nombre Corto"
          minLength={5}
          maxLength={20}
        //   value={user.password}
        //   onChange={onInputChange}
        />
        

        <label for="exampleFormControlInput1" className="form-label">
         
          CUIT
        </label>
        <input
          type="number"
          name="CUIT"
          className="form-control mb-2"
          placeholder="CUIT"
          minLength={5}
          maxLength={20}
        //   value={user.password}
        //   onChange={onInputChange}
        />

        <label for="exampleFormControlInput1" className="form-label p-2">
            CBU
        </label>
          <input type="number" 
          name="CBU"
          className="form-control mb-2"
          placeholder="CBU"
          maxLength={30}
          // value={user.email}
        //   onChange={onInputChange}
          />
          <label for="exampleFormControlInput1" className="form-label p-2">
            Banco
        </label>
          <input type="text" 
          name="Banco"
          className="form-control mb-2"
          placeholder="Banco" 
          maxLength={30}
          // value={user.email}
        //   onChange={onInputChange}
          />
          <label for="exampleFormControlInput1" className="form-label p-2">
            Descuento de Ley
        </label>
          <input type="number" 
          name="CBU"
          className="form-control mb-2 "
          placeholder="CBU"
          maxLength={30}
          // value={user.email}
        //   onChange={onInputChange}
          />
          <label for="exampleFormControlInput1" className="form-label p-2">
            Descuento de Voluntario
        </label>
          <input type="number" 
          name="CBU"
          className="form-control mb-2"
          placeholder="CBU"
          maxLength={30}
          // value={user.email}
        //   onChange={onInputChange}
          />
          <label for="exampleFormControlInput1" className="form-label p-2">
            Localidad
        </label>
          <input type="text" 
          name="localidad"
          className="form-control mb-2"
          placeholder="Localidad"
          maxLength={30}
          // value={user.email}
        //   onChange={onInputChange}
          />
           <label for="exampleFormControlInput1" className="form-label">
         
          Configuracion de Registro de EC
        </label>
        <input
          type="text"
          name="CUIT"
          className="form-control mb-2"
          placeholder="CUIT"
          minLength={5}
          maxLength={20}
        //   value={user.password}
        //   onChange={onInputChange}
        />
         <label for="exampleFormControlInput1" className="form-label">
       
          Logo
        </label>
        <input
          type="number"
          name="logo"
          className="form-control mb-2"
          placeholder="logo de su sindicato"
          minLength={5}
          maxLength={20}
        //   value={user.password}
        //   onChange={onInputChange}
        />
        <br />

        <div className="mb-2">
          <button type="submit" className="btn btn-outline-light">
            Ingresar
          </button>
        </div>
        <hr></hr>

        <label for="exampleFormControlInput1" className="form-label">
          ¿Sos nuevo? por favor
          <button
            type="button"
            className="btn btn-outline-light m-2"
            onClick={irRegistro}
          >
            Registrate
          </button>
          aqui
        </label>
      </form>
    </div>
  

  );
};
