import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import { starLogin } from '../helpers/StarLogin'; 
import swal from 'sweetalert';
import SelectLocalidad from './BuscadorSelect';


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
    });

    const navigate = useNavigate();

    //controla los cambios que se hagan en los campos del formulario
    const onInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    //captura lo el formulario y verifica los campos lanzando una alerta con swal
    const onSubmit = (e) => {
        e.preventDefault();
        if (
            user.email.trim() === "" ||
            user.password.trim() === "" ||
            user.nombreEC.trim() === "" ||
            user.confirmarPassword.trim() === "" ||
            user.telefono.trim() === "" ||
            user.domicilio.trim() === "" ||
            user.cuit.trim() === "" ||
            user.localidad.trim() === "") {
            swal("ERROR", "todos los campos son obligatorios", "error");
        } else {

            swal("FUNCIONA", user.email + " " + user.password, "success");
            //starLogin(user.email, user.password, navigate);//llama al metodo starLogin del helper 
        }
    }

    return (
        <div className='container-sm'>
            <form className="p-5 p-sm-4 rounded text-center border border-white m-3 row" onSubmit={onSubmit}>

                <h1 className=''>

                    As-online
                </h1>

                <h3 className=''>
                    <i className="bi bi-person-circle"> </i>
                    Formulario de Regisrtro
                </h3>

                <div className='col-6'>
                    <label for="exampleFormControlInput1" className="form-label" onSubmit={onSubmit}>

                        <i className="bi bi-person-fill"> </i>
                        Nombre del Estudio contable


                    </label>
                    <input type="text" name="nombreEC" className="form-control mb-3" placeholder="LasMalvinas" maxLength={30} value={user.nombreEC} onChange={onInputChange} />

                </div>


                <div className='col-6'>
                    <label for="exampleFormControlInput1" className="form-label">

                        <i className="bi bi-lock-fill"> </i>
                        Correo electronico


                    </label>
                    <input type="email" name="email" className="form-control" placeholder="ejemplo@gmail.com" minLength={5} maxLength={20} value={user.email} onChange={onInputChange} />

                </div>


                <div className='col-4'>
                    <label for="exampleFormControlInput1" className="form-label">

                        <i className="bi bi-lock-fill"> </i>
                        Contraseña

                    </label>
                    <input type="password" name="password" className="form-control" placeholder="******" minLength={5} maxLength={20} value={user.password} onChange={onInputChange} />


                </div>

                <div className='col-4'>
                    <label for="exampleFormControlInput1" className="form-label">

                        <i className="bi bi-lock-fill"> </i>
                        Confirmar Contraseña

                    </label>
                    <input type="password" name="confirmarPassword" className="form-control" minLength={5} maxLength={20} value={user.confirmarPassword} onChange={onInputChange} />


                </div>

                <div className='col-4'>
                    <label for="exampleFormControlInput1" className="form-label">

                        <i className="bi bi-lock-fill"> </i>
                        telefono

                    </label>
                    <input type="number" name="telefono" className="form-control" minLength={5} maxLength={20} value={user.telefono} onChange={onInputChange} />

                </div>


                <div className='col-6'>
                    <label for="exampleFormControlInput1" className="form-label" onSubmit={onSubmit}>

                        <i className="bi bi-person-fill"> </i>
                        Domicilio


                    </label>
                    <input type="text" name="domicilio" className="form-control mb-3" maxLength={30} value={user.domicilio} onChange={onInputChange} />

                </div>

                <div className='col-6'>
                    <label for="exampleFormControlInput1" className="form-label">

                        <i className="bi bi-lock-fill"> </i>
                        CUIt

                    </label>
                    <input type="number" name="cuit" className="form-control" placeholder='**-********-*' minLength={5} maxLength={20} value={user.cuit} onChange={onInputChange} />

                </div>


                <div className='col-12'>
                    <SelectLocalidad />


                </div>

                <hr></hr>

                <div className="col-6">
                    <button type="submit" className="btn btn-outline-light" >Registrar</button>
                </div>

                <div className="col-6">
                    <button type="submit" className="btn btn-outline-light" >Cancelar</button>
                </div>



            </form>
        </div>
    )


}