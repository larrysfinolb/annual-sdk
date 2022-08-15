import Header from '../templates/Header';

const Inicio = () => {
	const view = `
		<header style="margin-bottom: 60px;">
			${Header()}
		</header>
		<main>
			<section></section>
		</main>
	`;

	return view;
};

export default Inicio;
