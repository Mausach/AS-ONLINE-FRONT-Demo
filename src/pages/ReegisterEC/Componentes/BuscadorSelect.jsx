import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'La Banda', label: 'La Banda' },
  { value: 'Frias', label: 'Frias' },
  { value: 'Ojo de agua', label: 'Ojo de agua' },
  // Agrega más opciones según sea necesario
];

function SelectLocalidad() {
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
      placeholder="Localidad..."
      className="text-dark"
      
    />
  );
}

export default SelectLocalidad;