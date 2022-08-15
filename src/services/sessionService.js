import { loginSaint } from '../utils/api';

export const loginService = async () => {
	const login = document.querySelector('#login');

	login.addEventListener('submit', async (e) => {
		e.preventDefault();

		const idUser = document.querySelector('#idUser').value || 'example@example.com';
		const password = document.querySelector('#password').value || 'example';

		try {
			const data = await loginSaint(idUser, password);
			if (data.Message !== 'Usuario no registrado') localStorage.setItem('token', data.Message);

			if (data.Status === 0) location.href = `https://larrysfinolb.github.io/annual-sdk/dist`;
		} catch (error) {
			console.log(error);
		}
	});
};

export const logoutService = async () => {
	const logout = document.querySelector('#logout');
	logout.addEventListener('click', (e) => {
		localStorage.removeItem('token');
		location.href = `https://larrysfinolb.github.io/annual-sdk/dist/#/login`;
	});
};
