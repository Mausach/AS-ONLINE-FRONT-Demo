import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { cargar_empleados_x_sucursalDB } from './Helpers/Cargar_empleado_x_sucursal';
import { TablaDeclaraciones } from './componentes/TablaDeclaraciones';
import MyPDFViewer from './componentes/VoletaPdf';//hai que borrar el componen7e por que no lo usamos
import { NavBarDec } from './componentes/NavBarDec';



export const DeclaracionJ = () => {

  const navegate = useNavigate()

  const { state } = useLocation();

    const location = useLocation();

  const datosEmpSuc = location.state;//recibe la sucursal

  
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


    useEffect(() => {
    
         
           cargar_empleados_x_sucursalDB(setCargarEmpleado,datosEmpSuc.sucursal.id);
         
         
    
     }, []);

  return (
    <div className='text-dark container-fluid'>
      <NavBarDec empresa={datosEmpSuc.empresa} navegate={navegate}  />
{CargarTabla()}


      </div>
      
  )


}