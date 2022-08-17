import { showSpinner, hideSpinner } from '../utils/spinner';
import { crearZona } from '../utils/api';
import Header from '../templates/Header';
import hostname from '../utils/hostname';

const CreateZone = async (wrapper, token) => {
	const view = `
		<header id="header"></header>
		<main>
			<section class="container">
				<h2 class="display-1 fw-bold mb-5">Crea una Zona</h2>
				<form id="form">
					<input type="text" class="form-control form-control-lg mb-3" placeholder="Codigo" id="codigo" required>
					<input type="text" class="form-control form-control-lg mb-3" placeholder="Descripcion" id="descripcion" required>
					<input type="text" class="form-control form-control-lg mb-3" placeholder="Clase" id="clase">
					<input type="text" class="form-control form-control-lg mb-3" placeholder="Representante" id="representante">
					<input type="number" class="form-control form-control-lg mb-3" min="0" max="1" step="1" placeholder="Activo" id="activo" required>
					<button type="submit" class="btn btn-dark btn-lg w-100 mb-3">Crear</button>
					<div class="alert alert-danger mb-3 d-none" role="alert" id="alert"></div>
				</form>
			</section>
		</main>
    `;
	wrapper.innerHTML = view;
	await Header('#header');

	document.querySelector('#form').addEventListener('submit', async (e) => {
		e.preventDefault();

		const alert = document.querySelector('#alert');

		const zona = {
			Activo: document.querySelector('#activo').value || 0,
			Clase: document.querySelector('#clase').value || '',
			Codigo: document.querySelector('#codigo').value || '',
			Descripcion: document.querySelector('#descripcion').value || '',
			Representante: document.querySelector('#representante').value || '',
		};

		try {
			if (zona.Codigo === '') {
				alert.innerHTML = 'Campo de Codigo Vacio';
				alert.classList.remove('d-none');
				throw 'Campo de Codigo Vacio';
			} else if (zona.Descripcion === '') {
				alert.innerHTML = 'Campo de Descripcion Vacio';
				alert.classList.remove('d-none');
				throw 'Campo de Descripcion Vacio';
			}

			showSpinner();
			const data = await crearZona(zona, token);
			hideSpinner();

			switch (data.Status) {
				case 0:
					location.href = `${hostname}#/listarzonas`;
					break;
				case -98:
					alert.innerHTML = 'El Codigo no es Valido o puede que se este utilizando.';
					alert.classList.remove('d-none');
					break;
				case -101:
					localStorage.removeItem('token');
					location.href = `${hostname}#/login`;
					break;
			}
		} catch (error) {
			hideSpinner();
			console.log(error);
		}
	});
};

export default CreateZone;
