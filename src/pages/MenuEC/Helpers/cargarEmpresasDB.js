import swal from 'sweetalert';
import authApi from '../../../api/authApi';



//cargarEmpresas desde la DB
export const cargarEmpresasDB = async (setCargarEmpresas, navigate, usuarioID) => {
    try {
        const resp = await authApi.get(`/est-cont/empresas/${usuarioID}`);

        if (Array.isArray(resp.data.empresas)) {//pregun7o si lo que 7rae es un arreglo
            setCargarEmpresas(resp.data.empresas);
        } else {
            console.error("Los datos de empresas no son un array:", resp.data);
        }

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");;
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }
};