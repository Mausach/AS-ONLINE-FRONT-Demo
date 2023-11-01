
import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const starCrearDdjj = async ( ddjjC,empleados,navigate) => {
    console.log(ddjjC,empleados);
    try {
        const resp = await authApi.post('/est-cont/new-ddj', {
        ddjjC,
        empleados,
        });

        swal("FELICIDADES", "ah Realizado una declaracion jurada con Exito", "success");
        navigate('/Pdf', { state: ddjjC }); //deberiamos enviar el sindica7o is 7ambn 
       // navigate("/Pdf");

    } catch (error) {
        console.log(error.response.data);
        swal("ERROR", error.response.data.msg, "error");
    }

}