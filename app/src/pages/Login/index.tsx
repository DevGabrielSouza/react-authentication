import React from 'react';
import './style.css';

const Login = () => {
    return(
       <main className="container container-login">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form>

                        <fieldset>

                            <legend>
                                <h2>Acessar o sistema</h2>
                            </legend>

                            <div className="form-floating">
                                <input type="text" id="user" className="form-control" placeholder="Nome de usuário" />
                                <label htmlFor="user">Usuário</label>
                            </div>

                            <div className="form-floating my-4">
                                <input type="text" id="password" className="form-control" placeholder="Nome de usuário" />
                                <label htmlFor="password">Senha</label>
                            </div>

                            <div className="submit">
                                <button type="submit" className="btn btn-primary w-100">Entrar</button>
                            </div>

                        </fieldset>

                    </form>
                </div>
            </div>
       </main>
    )
}

export default Login;