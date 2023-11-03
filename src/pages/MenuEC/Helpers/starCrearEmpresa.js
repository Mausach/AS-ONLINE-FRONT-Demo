import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const starCrearEmpresa = async ( id_Esutdio_Conable, cuit, razonsocial, nombrefantasia, telefono, navigate,setNuevaEmpresaCargada) => {
    try {
        const resp = await authApi.post('/est-cont/new-al-em', {
            id_Esutdio_Conable,
            cuit,
            razonsocial,
            nombrefantasia,
            telefono
        });

        swal("FELICIDADES", "ah Registrado una empresa con Exito", "success");
       // window.location.reload();
        //navigate('/menuEC', { state: id_Esutdio_Conable });
        //navigate("/*");
        setNuevaEmpresaCargada(true)

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }

}