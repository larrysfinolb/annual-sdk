import { showSpinner, hideSpinner } from '../utils/spinner';
import { loginSaint } from '../utils/api';
import hostname from '../utils/hostname';

const Login = async (wrapper) => {
	const view = `
        <header></header>
        <main>
            <section class="h-100 container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-8 col-lg-6 col-xl-4">
                        <form id="login">
                            <div class="d-flex flex-row align-items-center justify-content-center">
                                <h1 class="fw-bold mb-4">Inicia Sesion</h1>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label fw-bold" for="idUser">Usuario</label>
                                <input type="email" id="idUser" class="form-control form-control-lg" placeholder="Ingresa tu correo de usuario" required />
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label fw-bold" for="password">Contraseña</label>
                                <input type="password" id="password" class="form-control form-control-lg" placeholder="Ingresa tu contraseña" required />
                            </div>
                            <div class="text-center mb-4">
                                <button type="submit" class="btn btn-dark btn-lg w-100">Iniciar</button>
                            </div>
                            <div class="alert alert-danger mb-0 d-none" role="alert" id="alert"></div>
                        </form>
                    </div>
                </div>
            </section>
        </main>`;
	wrapper.innerHTML = view;

	document.querySelector('#login').addEventListener('submit', async (e) => {
		e.preventDefault();

		const alert = document.querySelector('#alert');

		const idUser = document.querySelector('#idUser').value || '';
		const password = document.querySelector('#password').value || '';

		try {
			if (idUser === '') {
				alert.innerHTML = 'Campo de Correo Electronico Vacio';
				alert.classList.remove('d-none');
				throw 'Campo de Correo Electronico Vacio';
			} else if (password === '') {
				alert.innerHTML = 'Campo de Contraseña Vacio';
				alert.classList.remove('d-none');
				throw 'Campo de Contraseña Vacio';
			}

			showSpinner();
			const data = await loginSaint(idUser, password);
			hideSpinner();

			switch (data.Status) {
				case 0:
					localStorage.setItem('token', data.Message);
					location.href = `${hostname}#`;
				case -2:
					alert.innerHTML = 'Usuario no Registrado';
					alert.classList.remove('d-none');
					break;
				case -3:
					alert.innerHTML = 'Contraseña de Usuario Incorrecta';
					alert.classList.remove('d-none');
					break;
				default:
					break;
			}
		} catch (error) {
			hideSpinner();
			console.error(error);
		}
	});
};

export default Login;
