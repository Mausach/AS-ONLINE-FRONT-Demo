import swal from 'sweetalert';
import authApi from '../../../api/authApi';

export const starLogin = async (email, password, navigate) => {
  try {
    const resp = await authApi.post('/auth/login', {
      email,
      password
    });
    localStorage.setItem('token', resp.data.token);
    console.log(resp.data)

    if (resp.data.rol === "Esutdio-Conable") {
      console.log(resp.data.id)
      navigate('/menuEC', { state: resp.data.id });
    } else {
      navigate("/menuSD", { state: resp.data.id });
    }

  } catch (error) {
    console.log(error);
    swal("ERROR", error.response.data.msg, "error");
  }
}