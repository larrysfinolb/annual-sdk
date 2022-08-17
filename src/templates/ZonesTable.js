import { showSpinner, hideSpinner } from '../utils/spinner';
import { listarZonas } from '../utils/api';
import hostname from '../utils/hostname';

const ZonesTable = async (parentId, token) => {
	const view = `
        <table class="table table-light table-striped table-hover table-sm">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Clase</th>
                    <th scope="col">Representante</th>
                    <th scope="col">Activo</th>
                </tr>
            </thead>
            <tbody id="tbody"></tbody>
        </table>`;
	document.querySelector(parentId).innerHTML = view;

	const tbody = document.querySelector('#tbody');
	try {
		showSpinner();
		const data = await listarZonas({}, token);
		hideSpinner();

		switch (data.Status) {
			case 0:
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
};

export default ZonesTable;
