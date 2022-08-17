import Header from '../templates/Header';
import ZonesTable from '../templates/ZonesTable';

const ListZones = async (wrapper, token) => {
	const view = `
        <header id="header"></header>
        <main>
            <section class="container">
                <h2 class="display-1 fw-bold mb-5">Lista de Zonas</h2>
                <div id="table"></div>
            </section>
        </main>`;
	wrapper.innerHTML = view;
	await Header('#header');
	await ZonesTable('#table', token);
};

export default ListZones;
