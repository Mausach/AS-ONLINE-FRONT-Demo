import Table from 'react-bootstrap/Table';
import { Button, Container, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { starCrearDdjj } from '../Helpers/S7arCrearDdjj';
import { useNavigate } from 'react-router-dom';

export const TablaDeclaraciones = ({ cargarEmpleado, empresa }) => {

  //state para las declaraciones juradas Cabezera
  const fechaEspecifica = new Date(2013, 9, 1); // Año 2013, mes 10 (octubre, ya que los meses se indexan desde 0), día 1
  

  const navigate = useNavigate();
  //primero se ejecu7a i guarda la cabezera i despues cada ddjj
 //const [ddjjC, setDdjjC] = useState({});

    //state para las declaraciones juradas
  const [ddjj, setDdjj] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

// Inicializa una variable para controlar si todos los sueldos se han cargado
let todosSueldosCargados = true;

// Verifica si algún sueldo no se ha cargado
cargarEmpleado.forEach((empleado) => {
  if (!ddjj[empleado.id]?.sueldo) {
    todosSueldosCargados = false;
    return;
  }
});

if (todosSueldosCargados) {

  
  // Realiza la acción que desees aquí
  //armamos la cabezera i la idea es mandar al helper para guardar en DB  el obje7o cabezer i ddjj que es arreglo con los empleados declarados
  // Utilizamos reduce para sumar los descuentos
  const ddjjArray = Object.values(ddjj);

const totalDescuentoslei = ddjjArray.reduce((acumulador, empleado) => acumulador + empleado.descley, 0);
const totalDescuentosvol = ddjjArray.reduce((acumulador, empleado) => acumulador + empleado.descvolunt, 0);


// datos que deseas cargar en ddjjC
const nuevosDatos = {
  periodo: fechaEspecifica.toISOString(), // Puedes establecer el valor que desees
  cuit: empresa.cuit, // Puedes establecer el valor que desees
  fechapresentacion: fechaEspecifica.toISOString(), // Puedes establecer el valor que desees
  fechapago: fechaEspecifica, // Puedes establecer el valor que desees
  fechaprocesamiento: fechaEspecifica.toISOString(), // Puedes establecer el valor que desees
  fechabaja: fechaEspecifica.toISOString(), // Puedes establecer el valor que desees
  totaldescley: parseFloat(totalDescuentoslei).toFixed(2) , // Puedes establecer el valor que desees
  totaldescvolunt: parseFloat(totalDescuentosvol).toFixed(2), // Puedes establecer el valor que desees
};

// Carga los nuevos datos en el estado ddjjC
//setDdjjC(nuevosDatos);
  
  
  console.log(nuevosDatos,ddjj)

  if (cargarEmpleado.length > 0) {
    //aqui hai que mandar el/los obje7os al backend
starCrearDdjj(nuevosDatos,ddjjArray,navigate);
    
  } else {
    swal("ERROR", "no existen empleados para declarar", "error");
  }

  

} else {
  swal("ERROR", "Faltan sueldos por declarar", "error");
}

  }

  //controla los cambios que se hagan en los campos del formulario

//para que 7ome en el formulario cada sueldo de empleado por separado
const onInputChange = (e, empleadoId) => {
  const name = e.target.name;
  const value = e.target.value;

  const cuilEmpleado = cargarEmpleado.find((empleado) => empleado.id === empleadoId)?.cuil;

  // Realiza el cálculo de descley en función de sueldo y acuerdo
  let calculatedDescley = 0;
  let calculatedDescvolunt = 0;

  if (name === 'sueldo' || name === 'acuerdo') {
    const sueldo = parseFloat(ddjj[empleadoId]?.sueldo || 0);
    const acuerdo = parseFloat(ddjj[empleadoId]?.acuerdo || 0);
    
    calculatedDescley = (sueldo + acuerdo) * 0.02;//aqui va el valor fijo pero se debe cambiar po lo de l a7abla
    calculatedDescvolunt = (sueldo + acuerdo) * 0.02;//aqui va el valor fijo pero se debe cambiar po lo de l a7abla
  
  }

  setDdjj((prevDdjj) => ({
    ...prevDdjj,
    [empleadoId]: {
      ...prevDdjj[empleadoId],
      [name]: value,//aqui va el res7o de da7os

      id_cabezera: "",//poner od de la cabezera de arriba
      periodo: fechaEspecifica/*periodo 7ambien se debe 7raer de una 7abla*/,
      cuit: empresa.cuit,
      cuil_empleado: cuilEmpleado,
      descley: calculatedDescley.toFixed(2), // Redondea a 2 decimales
      descvolunt: calculatedDescvolunt.toFixed(2),
      rectificacion: true,
      cargafamiliar:true,
      jubilado:true,
      estado:true,
      fechabaja:fechaEspecifica,
      
    },
  }));
};

    return (
      <div>
        <Container className='justify-content-center align-items-center p-5 mt-5 p-sm-4'>
        <Form onSubmit={onSubmit} className='shadow p-3 mb-5 bg-white rounded'> 
          <Table striped bordered hover variant="light" responsive="sm" className="text-dark justify-content-center align-items-center p-5 p-sm-4 border border-dark">
  
            <thead>
  
              <tr>
                <th colSpan={9}>
                  <h3 >Periodo: {'10/2023'/*periodo 7ambien se debe 7raer de una 7abla*/}</h3>
                  <h4 >total de empleados: {cargarEmpleado.length}</h4>
                  <Button variant="dark" onClick={onSubmit}>Finalizar</Button>
                </th>
              </tr>
  
              <tr>
                <th>Cuil</th>
                <th>Apellido y Nombre</th>
                <th>Sueldo</th>
                <th>Acuerdo</th>
                {/*<th className='d-none d-md-table-cell'>detalle</th>*/} 
                <th>{2+'%'/*se carga segun el sindica7o i sus % */} de ley</th>
                <th> {2+'%' /*se carga segun el sindica7o i sus % */}de socio</th>
                <th>total DDJJ</th>
                
              </tr>
            </thead>
  
            {cargarEmpleado.map((empleado) => {
                /*aqui se hace el calculo para el 2% de cada cosa i el 7o7al de ddjj */
                // Aquí calculamos descley para cada empleado
  const sueldo = parseFloat(ddjj[empleado.id]?.sueldo || 0);
  const acuerdo = parseFloat(ddjj[empleado.id]?.acuerdo || 0);
  const descley = (sueldo + acuerdo) * 0.02;
  const descvolunt = (sueldo + acuerdo) * 0.02; //7ambien debe 7omarse de una 7abla
                const totalDDJJ=(sueldo+acuerdo+descley+descvolunt)
              return (
                <tbody key={empleado.id}>
                  <tr>
                    <td>{empleado.cuil}</td>
                    <td>{empleado.apellido} {empleado.nombre}</td>

                    <td>
                    
                    <Form.Group className="" controlId="formBasicEmail">
                    
                    <Form.Control type="number" step="0.01" name='sueldo' maxLength={13} value={ddjj[empleado.id]?.sueldo || ''} onChange={(e) => onInputChange(e, empleado.id)}  />
                </Form.Group>  

            </td> 

            <td> 
            
                    <Form.Group className="" controlId="formBasicEmail">
                    
                    <Form.Control type="number" step="0.01" name='acuerdo' maxLength={13} value={ddjj[empleado.id]?.acuerdo || ''} onChange={(e) => onInputChange(e, empleado.id)} />
                </Form.Group>  

            
                 </td>
                    

                    {/*<td className='d-none d-md-table-cell'>{producto.detalle}</td>*/}
                    <td>{'$' + descley.toFixed(2)}</td>
                    <td>{'$' + descvolunt.toFixed(2)}</td>
                    <td>{'$' +totalDDJJ.toFixed(2)}</td>
                  </tr>
                </tbody>
              );
            })}
  
          </Table>
          
          </Form>
        </Container>
      </div>
    )
  }