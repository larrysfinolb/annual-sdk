import Header from '../templates/Header';

const Inicio = async (wrapper) => {
	const view = `
		<header id="header"></header>
		<main>
			<section class="container text-center">
				<h2 class="display-1 fw-bold">¡BIENVENIDO!</h2>
				<p class="display-6">Utiliza la barra de navegacion superior para dirigirte a los diferentes apartados del sitio web, desde los
				cuales podras consumir y poner a prueba los Web Services proporcionados por el SDK de Saint</p>
			</section>
		</main>
	`;
	wrapper.innerHTML = view;
	await Header('#header');
};

export default Inicio;
