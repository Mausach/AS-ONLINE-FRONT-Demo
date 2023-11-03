import React, { useState } from 'react';
import Select from 'react-select';

//selec7or de localidad hacerlo con una api
const options = [
    { value: 1, label: 'La Banda' },
  { value: 2, label: 'Frias' },
  { value: 3, label: 'Ojo de agua' },
  
  ];
  
  
//selecciona la localdad
function SelectLocalidades({sucursal,setSucursal}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleLocChange = (selectedOption) => {
    setSucursal({
      ...sucursal,
      id_localidad: selectedOption.value, // Establece el valor seleccionado del sindicato en el estado
    });
    setSelectedOption(selectedOption)
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleLocChange}
      options={options}
      isSearchable={true} // Activa la funcionalidad de búsqueda
      name='id_localidad'
      placeholder="Localidad..."
      className="text-dark"
      
    />
  );
}

export default SelectLocalidades;