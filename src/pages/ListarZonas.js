import Header from '../templates/Header';

const ListarZonas = () => {
	const view = `
        <header style="margin-bottom: 60px;">
            ${Header()}
        </header>
        <main>
            <section class="container">
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
                </table>
            </section>
        </main>`;
	return view;
};

export default ListarZonas;
