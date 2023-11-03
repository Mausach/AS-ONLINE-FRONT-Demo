import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { starLogin } from '../Helpers/StarLogin';


export const ForularioLogin = () => {

    //state para usuario e email del usuario
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();//navegar a o7ra ru7a


    function irRegistro() {
        navigate('/register')
    }

    
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
            user.password.trim() === "") {
            swal("ERROR", "todos los campos son obligatorios", "error");
        } else {

            starLogin(user.email, user.password, navigate);//llama al metodo starLogin del helper 
        }
    }

    

    return (//cambiar a reac7 boos7rap el form
        <div className='container-sm shadow p-3 mb-5 bg-white rounded'>
            <form className="p-5 p-sm-4 rounded text-center border border-dark m-3" onSubmit={onSubmit}>

            <h1 className=''>
                    
                    AS-online
                </h1>

                <h3 className=''>
                    <i className="bi bi-person-circle"> </i>
                    INICIAR SESIÓN
                </h3>
                <label for="exampleFormControlInput1" className="form-label" onSubmit={onSubmit}>

                <i className="bi bi-person-fill"> </i>
                        Correo Electronico

                
                </label>
                <input type="email" name="email" className="form-control mb-3"  placeholder="perez@gmail.com" maxLength={30} value={user.email} onChange={onInputChange}/>

                <label for="exampleFormControlInput1" className="form-label">
                
                <i className="bi bi-lock-fill"> </i>
                        Contraseña
                
                    
                    </label>
                <input type="password" name="password" className="form-control" placeholder="******" minLength={5} maxLength={20} value={user.password} onChange={onInputChange}/>

                <label for="exampleFormControlInput1" className="form-label p-2">
                
                        
                            <a href="#" className='text-dark'>¿Olvidaste tu contraseña? Clic aquí</a>
                        
                
                    
                    </label>
                
                    <div className="mb-2">
                    <button type="submit" className="btn btn-outline-primary" >Ingresar</button>
                    </div>
                    <hr></hr>

                 <label for="exampleFormControlInput1" className="form-label text-dark">
                
                        
                            ¿Sos nuevo? por favor

                            <button type="button" className="btn btn-outline-primary m-2" onClick={irRegistro}>Registrate</button>

                            
                            
                            aqui
                
                    
                    </label>       

                
            </form>
        </div>
    )


}