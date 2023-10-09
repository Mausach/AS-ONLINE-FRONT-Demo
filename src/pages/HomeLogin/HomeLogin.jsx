import React, { useState, useEffect } from 'react';
import 'animate.css/animate.min.css'; // Importa los estilos de animate.css

import '../HomeLogin/home.css'
import { ForularioLogin } from './Componentes/FromularioLogin';
import Navbar from '../Navbar/Navbar';
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
        <div className='text-light'>
          {showWelcome ? (
        <div className="animate__animated animate__fadeIn">
          {/* Agrega aquí tu mensaje de bienvenida */}
          <h1 className='tamañoAnimacion'>As-Online</h1>
        </div>
      ) : (
        // Cuando la animación ha terminado (showWelcome === false),
        // muestra tu contenido principal o redirige al usuario
        <>
          {/* Aquí puedes agregar tu contenido principal */}
          <Navbar/>
          <ForularioLogin/>
          {/* O puedes redirigir al usuario usando window.location.href */}
          <Footer/>
          
        </>
      )}  
        </div>
      )
    
  
  }