import { showSpinner, hideSpinner } from '../utils/spinner';
import { buscarZona } from '../utils/api';
import Header from '../templates/Header';
import hostname from '../utils/hostname';

const SearchZone = async (wrapper, token) => {
	const view = `
    	<header id="header"></header>    
		<main>
            <section class="container">
                <h2 class="mb-5 fw-bold display-1">Buscar una Zona</h2>
                <form class="input-group mb-3" id="form">
                    <input type="text" class="form-control form-control-lg" id="codigo" placeholder="Codigo de la Zona" required>
                    <button class="btn btn-dark btn-lg" type="submit">Buscar</button>
                </form>
                <div>
                    <input type="text" class="form-control form-control-lg mb-3" id="descripcion" placeholder="Descripcion" disabled>
                    <input type="text" class="form-control form-control-lg mb-3" id="clase" placeholder="Clase" disabled>
                    <input type="text" class="form-control form-control-lg mb-3" id="representante" placeholder="Representante" disabled>
                    <input type="number" class="form-control form-control-lg mb-3" id="activo" placeholder="Activo" disabled>
                    <div class="alert alert-danger mb-3 invisible" role="alert" id="alert"></div>
                </div>
            </section>
		</main>`;
	wrapper.innerHTML = view;
	await Header('#header');

	document.querySelector('form').addEventListener('submit', async (e) => {
		e.preventDefault();

		const alert = document.querySelector('#alert');

		const codigoZona = document.querySelector('#codigo').value || '';

		const descripcion = document.querySelector('#descripcion');
		const clase = document.querySelector('#clase');
		const representante = document.querySelector('#representante');
		const activo = document.querySelector('#activo');

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
					descripcion.value = data.Data.Descripcion;
					clase.value = data.Data.Clase;
					representante.value = data.Data.Representante;
					activo.value = data.Data.Activo;
					break;
				case -1:
					descripcion.value = '';
					clase.value = '';
					representante.value = '';
					activo.value = '';
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
};

export default SearchZone;
