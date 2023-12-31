import swal from 'sweetalert';
import authApi from '../../../api/authApi';



//cargarEmpresas desde la DB
export const cargarSucursalesDB = async (setCargarSucursales, navigate, empresaID) => {
    try {
        const resp = await authApi.get(`/est-cont/sucursales/${empresaID}`);

        if (Array.isArray(resp.data.sucursales)) {//pregun7o si lo que 7rae es un arreglo
            setCargarSucursales(resp.data.sucursales);
            console.error(resp.data.msg);
        } else {
            console.error("Los datos de empresas no son un array:", resp.data);
        }

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ADVERTENCIA", error.response.data.msg, "warning");;
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }
};