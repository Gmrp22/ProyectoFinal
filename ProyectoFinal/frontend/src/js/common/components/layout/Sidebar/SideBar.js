import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { toggleOpen, navToggle, logOut, auth } = this.props;
        return (
            <aside className={`main-sidebar px-0 col-12 col-md-3 col-lg-2 ${toggleOpen?'':'open'}`}>
                <div className="main-navbar">
                    <nav
                        className="align-items-stretch flex-md-nowrap border-bottom p-0 navbar navbar-light">
                        <a  href="#" className="w-100 mr-0 navbar-brand" >
                            <div className="d-table m-auto">
                                <img id="main-logo"
                                    className="d-inline-block align-top mr-1"
                                    src={require('assets/img/logo.png')}
                                    alt="Logo" />
                            </div>
                        </a>
                        <a  className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                            onClick={navToggle}>
                            <i className="material-icons"></i>
                        </a>
                    </nav>
                </div>
                <div className="nav-wrapper sidebar">
                    <ul className="nav--no-borders flex-column nav">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link " activeClassName={'active'}>
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">edit</i>
                                </div>
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/seller/myproducts" className="nav-link" activeClassName={'active'}>
                                <div className="d-inline-block item-icon-wrapper">
                                    {auth ?<i className="material-icons">vertical_split</i>
                                    : <i className="material-icons">lock</i>
                                    }
                                    
                                </div>
                                <span>Mis productos</span>
                                </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/seller/mysoldproducts" className="nav-link" activeClassName={'active'}>
                                <div className="d-inline-block item-icon-wrapper">
                                {auth ?<i className="material-icons">vertical_split</i>
                                    : <i className="material-icons">lock</i>
                                    }
                                </div>
                                <span>Mis ventas</span>
                                </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/report" className="nav-link" activeClassName={'active'}>
                                <div className="d-inline-block item-icon-wrapper">
                                {auth ?<i className="material-icons">vertical_split</i>
                                    : <i className="material-icons">lock</i>
                                    }
                                </div>
                                <span>Reporte ventas</span>
                                </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/purchase/mypurchase" className="nav-link" activeClassName={'active'}>
                                <div className="d-inline-block item-icon-wrapper">
                                {auth ?<i className="material-icons">vertical_split</i>
                                    : <i className="material-icons">lock</i>
                                    }
                                </div>
                                <span>Mis compras</span>
                                </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/product/catalogue" className="nav-link" activeClassName={'active'}>
                                <div className="d-inline-block item-icon-wrapper">
                                <i className="material-icons">vertical_split</i>
                                </div>
                                <span>Catalogo</span>
                                </NavLink>
                        </li>
                        {auth ? 
                        <li className="nav-item">
                            <Link to="/login" onClick={logOut} className="nav-link">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">lock</i>
                                </div>
                                <span>Cerrar sesion</span>
                            </Link>
                        </li>
                        
                    :<div></div>}
                    </ul>
                </div>
            </aside>
        )
    }
}

export default SideBar;
