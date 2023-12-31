import axios from "axios";
//http://localhost:4003
//https://as-sumadre.onrender.com

export const authApi=axios.create({
    baseURL: "https://as-sumadre.onrender.com",   
});


authApi.interceptors.request.use((config) => {
	config.headers = {
		'x-token': localStorage.getItem('token'),
	};
	return config;
});

export default authApi;