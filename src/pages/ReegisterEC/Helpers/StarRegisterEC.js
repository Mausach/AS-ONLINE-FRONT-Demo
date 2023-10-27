import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const starRegister = async ( nombreEC, email, password, rol, navigate) => {
    try {
        const resp = await authApi.post('/auth/new', {
            nombreEC,
            email,
            password,
            rol
        });

        swal("FELICIDADES", " Usted se ah Registrado con Exito", "success");
        navigate("/*");

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }

}