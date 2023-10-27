import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { cargar_empleados_x_sucursalDB } from './Helpers/Cargar_empleado_x_sucursal';
import { TablaDeclaraciones } from './componentes/TablaDeclaraciones';
import MyPDFViewer from './componentes/VoletaPdf';


export const DeclaracionJ = () => {

  const { state } = useLocation();

    const location = useLocation();

  const datosEmpSuc = location.state;//recibe la sucursal

    //me 7iene que 7raer 7odos los empleados de la sucursal
    //estado para guardar los empleados de la sucursal traidos del backend
	const [cargarEmpleado, setCargarEmpleado] = useState([]);
  console.log(datosEmpSuc)
  

    const CargarTabla = () => {
        return (
            <div>
                <TablaDeclaraciones cargarEmpleado={cargarEmpleado} empresa={datosEmpSuc.empresa}/>
                
            </div>
          );

    }

    //acomodarlos en la 7abla o formulario para cargar los mon7os es el unico cambio que se puede edi7ar
    //calcular el porcen7aje de lei i de socio
    //verficar los capos
    //generar al DDJC con el 7o7al i los da7os correspondien7es
    //ambas se guardaran el la DB

    useEffect(() => {
    
         
           cargar_empleados_x_sucursalDB(setCargarEmpleado,datosEmpSuc.sucursal.id);
         
         
    
     }, []);

  return (
    <div className='text-dark container-fluid'>
      <h1>cuerpo de la 7abla de empleados</h1>
<h2>{datosEmpSuc.sucursal.id}</h2>
{CargarTabla()}


      </div>
      
  )


}