import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import CrearZona from '../pages/CrearZona';
import ListarZonas from '../pages/ListarZonas';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

import { loginService, logoutService } from '../services/sessionService';
import { crearZonaService, listarZonasService } from '../services/zonesService';

const token = localStorage.getItem('token');

const router = async () => {
	let hash = getHash();
	let route = resolveRoutes(hash);

	if (route !== '/login' && !token) location.href = `https://larrysfinolb.github.io/annual-sdk/dist/#/login`;
	else if (route === '/login' && token) location.href = `https://larrysfinolb.github.io/annual-sdk/dist`;

	const wrapper = document.querySelector('#wrapper');

	switch (route) {
		case '/':
			wrapper.innerHTML = Inicio();
			await logoutService();
			break;
		case '/crearzona':
			wrapper.innerHTML = CrearZona();
			await crearZonaService(token);
			await logoutService();
			break;
		case '/listarzonas':
			wrapper.innerHTML = ListarZonas();
			await listarZonasService(token);
			await logoutService();
			break;
		case '/login':
			wrapper.innerHTML = Login();
			await loginService();
			break;
		default:
	}
};

export default router;
