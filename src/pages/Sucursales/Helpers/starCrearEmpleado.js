import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const starCrearEmpleado = async ( dni,cuil,nombre,apellido,sucuId) => {
    try {
        const resp = await authApi.post('/est-cont/new-al-emp', {
            dni,
            cuil,
            nombre,
            apellido,
            sucuId
        });

        
        swal("FELICIDADES", resp.data.msg, "success");
        

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }

}