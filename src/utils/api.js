import axios from 'axios';

const API = 'https://obscure-peak-95636.herokuapp.com/api/v1';

export const loginSaint = async (idUser, password) => {
	const apiURL = `${API}/seg/loginsaint`;

	try {
		const response = await axios.post(apiURL, { idUser, password });
		const data = response.data;
		return data;
	} catch (error) {
		console.log('Error en la API:', error);
	}
};

export const crearZona = async (zona, token) => {
	const apiURL = `${API}/adm/crearzona`;

	try {
		const response = await axios.post(apiURL, { zona, token });
		const data = response.data;
		return data;
	} catch (error) {
		console.log('Error en la API:', error);
	}
};

export const listarZonas = async (parametro, token) => {
	const apiURL = `${API}/adm/listarzonas`;

	try {
		const response = await axios.post(apiURL, { parametro, token });
		const data = response.data;
		return data;
	} catch (error) {
		console.log('Error en la API:', error);
	}
};
