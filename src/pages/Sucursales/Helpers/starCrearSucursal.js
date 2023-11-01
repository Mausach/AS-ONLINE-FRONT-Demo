import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const starCrearSucursal = async ( id_Empresa, nombre, id_Sindicato, id_localidad) => {
    try {
        const resp = await authApi.post('/est-cont/new-sucursal', {
            id_Empresa,
            nombre,
            id_Sindicato,
            id_localidad
        });

        swal("FELICIDADES", "ah Registrado una nueva Sucursal con Exito", "success");
        window.location.reload();
        //navigate("/*");

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }

}