import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';
import './login.css';
import LoadMask from "Utils/LoadMask/LoadMask";

class Login extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    componentDidMount(props) {
        this.state = { prueba: true };
    }

    render() {
        const { onSubmit, loader } = this.props;
        if (localStorage.getItem('token')) {
            return (<Redirect to="/" />);
        }
        return (
            <div className="blue-gradient-bg">
                <div className="d-flex flex-column align-items-center pt-3 bienvenida">
                    <div className="form-head">
                    <h1>Bienvenido A Compras De Producto</h1>
                </div>
                </div>
                <br />
                <div className="login-wrapper ">
                    <div className=" col-lg-3 col-md-4 col-11 form-login">
                        
                        <LoadMask loading={loader} light>
                            <br></br>
                            <LoginForm onSubmit={onSubmit} />
                            <br></br>
                            <br></br>
                            <span>¿No tienes cuenta?&nbsp;<Link to="/registro">Registrate aquí</Link></span>
                            <br></br><br></br>
                            <span>¿Deseas comprar sin cuenta?&nbsp;<Link to="/product/catalogue">Compra</Link></span>
                        </LoadMask>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
