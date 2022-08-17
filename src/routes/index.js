import hostname from '../utils/hostname';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CreateZone from '../pages/CreateZone';
import SearchZone from '../pages/SearchZone';
import UpdateZone from '../pages/UpdateZone';
import ListZones from '../pages/ListZones';
import DeleteZona from '../pages/DeleteZone';
import _404 from '../pages/_404';

import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';

const router = async () => {
	const token = localStorage.getItem('token');

	let hash = getHash();
	let route = resolveRoute(hash);

	if (route !== '/login' && !token) location.href = `${hostname}#/login`;
	else if (route === '/login' && token) location.href = `${hostname}#`;

	const wrapper = document.querySelector('#wrapper');

	switch (route) {
		case '/':
			await Home(wrapper);
			break;
		case '/login':
			await Login(wrapper);
			break;
		case '/crearzona':
			await CreateZone(wrapper, token);
			break;
		case '/buscarzona':
			await SearchZone(wrapper, token);
			break;
		case '/editarzona':
			await UpdateZone(wrapper, token);
			break;
		case '/listarzonas':
			await ListZones(wrapper, token);
			break;
		case '/borrarzona':
			await DeleteZona(wrapper, token);
			break;
		default:
			await _404(wrapper);
	}
};

export default router;
