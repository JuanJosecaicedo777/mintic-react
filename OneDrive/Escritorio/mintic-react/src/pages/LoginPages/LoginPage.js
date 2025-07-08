function LoginPage() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="usuario@ejemplo.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" required />
                        </div>
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="rememberCheck" />
                            <label className="form-check-label" htmlFor="rememberCheck">Recuérdame</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Entrar</button>
                    </form>
                </div>
                <div className="card-footer text-center">
                    <small className="text-muted">¿No tienes cuenta? <a href="/Register">Regístrate</a></small>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
