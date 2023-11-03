import React from 'react';
import Barcode from 'react-barcode';

//aqui dbuja el codigo de barra
const CodigoDeBarra = () => {
    return (
      <div>
        {/* Otro contenido de tu componente */}
        <Barcode value="123456789" />
        {/* Otro contenido de tu componente */}
      </div>
    );
  };
  
  export default CodigoDeBarra;