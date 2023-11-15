import React, { useState, useEffect } from 'react';
import 'animate.css/animate.min.css'; // Importa los estilos de animate.css
import '../HomeLogin/home.css'
import { ForularioLogin } from './Componentes/FromularioLogin';
import Footer from '../Footer/Footer';


export const HomeLogin = () => {

    const [showWelcome, setShowWelcome] = useState(true);
    

  useEffect(() => {
    // Después de 3 segundos, oculta la animación de bienvenida y muestra tu contenido principal
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); //duracion

    return () => {
      clearTimeout(timer);
    };
  }, []);

  

      return (
        <div className='text-dark'>
          {showWelcome ? (
        <div className="animate__animated animate__fadeIn">
          
          <h1 className='tamañoAnimacion'>As-Online</h1>
        </div>
      ) : (
        // Cuando la animación ha terminado (showWelcome === false),
        // muestra tu contenido principal o redirige al usuario
        <>
          {/* Aquí puedes agregar tu contenido principal */}
          
          <ForularioLogin/>
<<<<<<< HEAD
          {/* O puedes redirigir al usuario usando window.location.href */}
=======
          
          <Footer/>
>>>>>>> d8782e0de8e59fc696e203ede3fe47d846a1b4dd
          
        </>
      )}  
        </div>
      )
    
  
  }