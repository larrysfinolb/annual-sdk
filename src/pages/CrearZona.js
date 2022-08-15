import Header from '../templates/Header';

const CrearZona = () => {
	const view = `
		<header style="margin-bottom: 60px;">
			${Header()}
		</header>
		<main>
			<section class="container mb-2">
				<form id="form">
					<div class="d-flex flex-row align-items-center justify-content-center">
						<h1 class="fw-bold mb-4">Crear Zona</h1>
					</div>
					<div class="form-outline mb-4">
						<label for="codigo" class="form-label fw-bold">Codigo</label>
						<input type="text" class="form-control form-control-lg" placeholder="Ingrea el codigo" id="codigo" required>
					</div>
					<div class="form-outline mb-4">
						<label for="descripcion" class="form-label fw-bold">Descripcion</label>
						<input type="text" class="form-control form-control-lg" placeholder="Ingrea la descripcion" id="descripcion" required>
					</div>
					<div class="form-outline mb-4">
						<label for="clase" class="form-label fw-bold">Clase</label>
						<input type="text" class="form-control form-control-lg" placeholder="Ingresa la clase" id="clase">
					</div>
					<div class="form-outline mb-4">
						<label for="representante" class="form-label fw-bold">Representante</label>
						<input type="text" class="form-control form-control-lg" placeholder="Ingresa el representante" id="representante">
					</div>
					<div class="form-outline mb-4">
						<label for="activo" class="form-label fw-bold">Activo</label>
						<input type="number" class="form-control form-control-lg" min="0" max="1" step="1" placeholder="Ingresa el estado de activo" id="activo" required>
					</div>
					<button type="submit" class="btn btn-dark btn-lg w-100">Crear</button>
				</form>
			</section>
		</main>
    `;
	return view;
};

export default CrearZona;
