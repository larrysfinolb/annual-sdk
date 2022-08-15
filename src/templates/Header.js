const Header = () => {
	const view = `
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <h1 class="navbar-brand mb-0 py-0">Annual SDK</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://larrysfinolb.github.io/annual-sdk/dist">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Zonas</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#/crearzona">Crear Zona</a></li>
                                <li><a class="dropdown-item" href="#/listarzonas">Listar Zonas</a></li>
                            </ul>
                        </li>
                        <li class="nav-item ms-auto">
                            <button type="button" id="logout" class="btn btn-outline-light">Cerrar Sesion</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
	return view;
};

export default Header;
