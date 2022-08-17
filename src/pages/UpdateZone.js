import { showSpinner, hideSpinner } from '../utils/spinner';
import { buscarZona, editarZona } from '../utils/api';
import Header from '../templates/Header';
import hostname from '../utils/hostname';

const UpdateZone = async (wrapper, token) => {
	const view = `
		<header id="header"></header>
		<main>
	        <section class="container">
	            <h2 class="display-1 fw-bold mb-5">Editar Zona</h2>
	            <form class="input-group mb-3" id="searchForm"s>
	                <input type="text" class="form-control form-control-lg" id="codigo" placeholder="Codigo de la Zona" required>
	                <button class="btn btn-dark btn-lg" type="submit">Buscar</button>
	            </form>
	            <form id="updateForm">
	                <input type="text" class="form-control form-control-lg mb-3" id="descripcion" placeholder="Descripcion" required>
	                <input type="text" class="form-control form-control-lg mb-3" id="clase" placeholder="Clase">
	                <input type="text" class="form-control form-control-lg mb-3" id="representante" placeholder="Representante">
	                <input type="number" class="form-control form-control-lg mb-3" id="activo" min="0" max="1" step="1" placeholder="Activo" required>
	                <button class="btn btn-dark btn-lg w-100 mb-3" type="submit">Editar</button>
                    <div class="alert alert-danger mb-3 invisible" role="alert" id="alert"></div>
	            </form>
	        </section>
		</main>`;
	wrapper.innerHTML = view;
	await Header('#header');

	const alert = document.querySelector('#alert');

	const codigo = document.querySelector('#codigo');
	const activo = document.querySelector('#activo');
	const clase = document.querySelector('#clase');
	const descripcion = document.querySelector('#descripcion');
	const representante = document.querySelector('#representante');

	document.querySelector('#searchForm').addEventListener('submit', async (e) => {
		e.preventDefault();

		const codigoZona = codigo.value || '';

		try {
			if (codigoZona === '') {
				alert.innerHTML = 'Campo de Codigo Vacio';
				alert.classList.remove('invisible');
				throw 'Campo de Codigo Vacio';
			}

			showSpinner();
			const data = await buscarZona(codigoZona, token);
			hideSpinner();

			switch (data.Status) {
				case 0:
					alert.classList.add('invisible');
					activo.value = data.Data.Activo;
					clase.value = data.Data.Clase;
					descripcion.value = data.Data.Descripcion;
					representante.value = data.Data.Representante;
					break;
				case -1:
					activo.value = '';
					clase.value = '';
					descripcion.value = '';
					representante.value = '';
					alert.innerHTML = 'Registro no Encontrado';
					alert.classList.remove('invisible');
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

	document.querySelector('#updateForm').addEventListener('submit', async (e) => {
		e.preventDefault();

		const zona = {
			Activo: activo.value || 0,
			Clase: clase.value || '',
			Codigo: codigo.value || '',
			Descripcion: descripcion.value || '',
			Representante: representante.value || '',
		};

		try {
			if (zona.Codigo === '') {
				alert.innerHTML = 'Campo de Codigo Vacio';
				alert.classList.remove('invisible');
				throw 'Campo de Codigo Vacio';
			} else if (zona.Descripcion === '') {
				alert.innerHTML = 'Campo de Descripcion Vacio';
				alert.classList.remove('invisible');
				throw 'Campo de Codigo Vacio';
			}

			showSpinner();
			const data = await editarZona(zona, token);
			hideSpinner();

			switch (data.Status) {
				case 0:
					location.href = `${hostname}#/listarzonas`;
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

export default UpdateZone;
