import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, getMe } from "./redux/modules/cuenta/login";

import SiderBar from './common/components/layout/Sidebar/SideBar';

import Navbar from "./common/components/layout/Navbar/Navbar";
import { VerifyLogin } from "./common/components/layout";


class PrivateRouteBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleOpen: true,
        };
    }

    navToggle = () => {
        this.setState({toggleOpen: !this.state.toggleOpen });
    };

    isAuthenticated = () => {
        const token = localStorage.getItem("token");
        const { getMe, login: { me } } = this.props;
        if (!!token && !!me.username) {
            return true;
        } else if(token) {
            getMe();
            return "Verifying"
        }
        return false;
    };

    render() {
        const { component: Component, logOut, login: { me }, ...rest } = this.props;
        const isAuthenticated = this.isAuthenticated();
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        (isAuthenticated === true) ? (<div>
                            <SiderBar toggleOpen={this.state.toggleOpen} navToggle={this.navToggle} logOut={logOut} auth={true} />
                            <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2 div-princiapal ">
                                <div className="main-navbar  sticky-top sidebar">
                                    <div className="p-0 container sidebar">
                                        <Navbar navToggle={this.navToggle} logOut={logOut} user={me} />
                                    </div>
                                </div>
                                <div className="main-content-container px-4 container-fluid div-princiapal">
                                    <Component {...props} />
                                </div>
                               
                            </main>
                        </div>) : (
                            <VerifyLogin />
                        )
                    ) : (


<div>
                            <SiderBar toggleOpen={this.state.toggleOpen} navToggle={this.navToggle} logOut={logOut} auth={false} />
                            <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2 div-princiapal">
                                <div className="main-navbar ">
                                    <div className="p-0 container ">
                                    <nav className="navno"></nav>
                                    </div>
                                </div>
                                <div className="main-content-container px-4 container-fluid">
                                    <Component {...props} />
                                </div>
                             
                            </main>
                        </div>





                   
                    )
                }
            />
        );
    }
}

const mstp = state => ({ ...state });

const mdtp = { logOut, getMe };

const ProtectedRoute = connect(
    mstp,
    mdtp
)(PrivateRouteBase);

export default ProtectedRoute;

