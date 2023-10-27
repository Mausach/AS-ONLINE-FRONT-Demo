import swal from 'sweetalert';
import authApi from '../../../api/authApi';



//cargar empleados por sucursal 
export const cargar_empleados_x_sucursalDB = async (setCargarEmpleado, sucursalId) => {
    try {
        const resp = await authApi.get(`/est-cont/sucursal/${sucursalId}/empleados`);

        if (Array.isArray(resp.data.empleados)) {//pregun7o si lo que 7rae es un arreglo

            if (resp.data.empleados.length === 0) {
                // arreglo vacio , posible aler7
                console.log("El arreglo de empleados es7a vacio");
            } else {
                
                setCargarEmpleado(resp.data.empleados);
                console.log(resp.data.empleados);
            }
            
        } else {
            console.error("Los datos de los empleados no son un array:", resp.data);
        }

        //console.log(resp.data.empresas)
        //setCargarEmpresas(resp.data);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");;
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }
};