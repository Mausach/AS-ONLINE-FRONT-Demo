import React, { useState } from 'react';
import Select from 'react-select';

//las 23 provincias del pais pero es7o debe 7raerse de una 7abla de la DB
const options = [
    { value: 'Buenos Aires', label: 'Buenos Aires' },
    { value: 'Catamarca', label: 'Catamarca' },
    { value: 'Chaco', label: 'Chaco' },
    { value: 'Chubut', label: 'Chubut' },
    { value: 'Córdoba', label: 'Córdoba' },
    { value: 'Corrientes', label: 'Corrientes' },
    { value: 'Entre Ríos', label: 'Entre Ríos' },
    { value: 'Formosa', label: 'Formosa' },
    { value: 'Jujuy', label: 'Jujuy' },
    { value: 'La Pampa', label: 'La Pampa' },
    { value: 'La Rioja', label: 'La Rioja' },
    { value: 'Mendoza', label: 'Mendoza' },
    { value: 'Misiones', label: 'Misiones' },
    { value: 'Neuquén', label: 'Neuquén' },
    { value: 'Río Negro', label: 'Río Negro' },
    { value: 'Salta', label: 'Salta' },
    { value: 'San Juan', label: 'San Juan' },
    { value: 'San Luis', label: 'San Luis' },
    { value: 'Santa Cruz', label: 'Santa Cruz' },
    { value: 'Santa Fe', label: 'Santa Fe' },
    { value: 'Santiago del Estero', label: 'Santiago del Estero' },
    { value: 'Tierra del Fuego', label: 'Tierra del Fuego' },
    { value: 'Tucumán', label: 'Tucumán' },
  ];
  
  
  

function SelectProvincia() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true} // Activa la funcionalidad de búsqueda
      placeholder="Provincia..."
      className="text-dark"
      
    />
  );
}

export default SelectProvincia;