import React from 'react';
import Barcode from 'react-barcode';


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