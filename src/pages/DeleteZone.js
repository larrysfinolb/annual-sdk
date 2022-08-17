import Header from '../templates/Header';
import ZonesTable from '../templates/ZonesTable';
import { borrarZona } from '../utils/api';
import hostname from '../utils/hostname';
import { showSpinner, hideSpinner } from '../utils/spinner';

const DeleteZone = async (wrapper, token) => {
	const view = `
        <header id="header"></header>
        <main>
            <section class="container">
                <h2 class="fw-bold display-1 mb-5">Eliminar Zona</h2>
                <form id="form" class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg" id="codigo" placeholder="Codigo de la Zona" required>
                    <button class="btn btn-dark btn-lg" type="submit">Eliminar</button>
                </form>
                <div class="alert mb-3 d-none" role="alert" id="alert"></div>
                <div id="table"></div>
            </section>
        </main>`;
	wrapper.innerHTML = view;
	await Header('#header');
	await ZonesTable('#table', token);

	document.querySelector('#form').addEventListener('submit', async (e) => {
		e.preventDefault();

		const alert = document.querySelector('#alert');

		const codigo = document.querySelector('#codigo');

		try {
			const codigoZona = codigo.value || '';

			if (codigoZona === '') {
				alert.innerHTML = 'Campo de Codigo Vacio';
				alert.classList.add('alert-danger');
				alert.classList.remove('alert-success');
				alert.classList.remove('d-none');
				throw 'Codigo de Campo Vacio';
			}

			showSpinner();
			const data = await borrarZona(codigoZona, token);
			hideSpinner();

			switch (data.Status) {
				case 0:
					codigo.value = '';
					alert.innerHTML = 'Registro Eliminado';
					alert.classList.add('alert-success');
					alert.classList.remove('alert-danger');
					alert.classList.remove('d-none');
					await ZonesTable('#table', token);
					break;
				case -2:
					alert.innerHTML = 'Esta Zona no se puede Eliminar, se encuentra Asociada a un Cliente';
					alert.classList.add('alert-danger');
					alert.classList.remove('alert-success');
					alert.classList.remove('d-none');
					break;
				case -101:
					location.href = `${hostname}#/login`;
					break;
			}
		} catch (error) {
			hideSpinner();
			console.log(error);
		}
	});
};

export default DeleteZone;
