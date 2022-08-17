import Header from '../templates/Header';

const _404 = async (wrapper) => {
	const view = `
        <header id="header"></header>
        <main>
            <section class="container text-center">
                <h2 class="display-1 fw-bold">ERROR 404</h2>
                <p class="h1">El recurso que intentas consultar no existe o no se encuentra disponible.</p>
            </section>
        </main>
    `;

	wrapper.innerHTML = view;
	await Header('#header');
};

export default _404;
