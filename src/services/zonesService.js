import { crearZona, listarZonas } from '../utils/api';

export const crearZonaService = async (token) => {
	const form = document.querySelector('#form');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const zona = {
			Activo: document.querySelector('#activo').value,
			Clase: document.querySelector('#clase').value,
			Codigo: document.querySelector('#codigo').value,
			Descripcion: document.querySelector('#descripcion').value,
			Representante: document.querySelector('#representante').value,
		};

		try {
			const data = await crearZona(zona, token);

			if (data.Message === 'Error Usuario no Autenticado') {
				localStorage.removeItem('token');
				location.href = `${location.protocol}//${location.host}/#/login`;
			}

			if (data.Status === 0) location.href = `${location.protocol}//${location.host}/#/listarzonas`;
		} catch (error) {
			console.log(error);
		}
	});
};

export const listarZonasService = async (token) => {
	const tbody = document.querySelector('#tbody');

	try {
		const data = await listarZonas({}, token);

		if (data.Message === 'Error Usuario no Autenticado') {
			localStorage.removeItem('token');
			location.href = `${location.protocol}//${location.host}/#/login`;
		}

		if (data.Status === 0) {
			tbody.innerHTML = data.Data.map((data) => {
				return `
					<tr>
						<td>${data.Codigo}</td>
						<td>${data.Descripcion}</td>
						<td>${data.Clase}</td>
						<td>${data.Representante}</td>
						<td>${data.Activo}</td>
					</tr>`;
			}).join('');
		}
	} catch (error) {
		console.log(error);
	}
};
