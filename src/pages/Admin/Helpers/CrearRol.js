import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const CrearRol = async () => {
    try {
        const resp = await authApi.post('/admin/new-rol', {
            nombre:"Estudio-Contable"
        });

        swal("FELICIDADES", resp.data.msg, "success");
        navigate("/*");

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }

}