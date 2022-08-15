const Login = () => {
	const view = `
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
                            <div class="text-center">
                                <button type="submit" class="btn btn-dark btn-lg w-100">Iniciar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>`;
	return view;
};

export default Login;
