import React, { Component } from 'react';
import '../assets/css/header.css';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { BrowserRouter, NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this) /*binding toggleNav to this*/
        this.toggleModal = this.toggleModal.bind(this) /*binding toggleModal to this*/
        // this.handleLogin = this.handleLogin.bind(this) /*binding handleLogin to this*/
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    /*
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember Me: " + this.remember.checked);
        event.preventDefault();
    }
    */



    render() {
        return (
            <React.Fragment>
                <div className="upper_nav">
                    <BrowserRouter>
                        <Navbar className="upper_nav_sub" dark expand="md">
                            <div className="unavsym">
                                <NavbarBrand className="mr-auto" href="/">
                                    <img src={require("../assets/images/s_logo.jpg")} height="40" width="41"
                                        alt="Space-React" />
                                </NavbarBrand>
                                <div className="org_name ml-1">
                                    <span className="org_text">Varuna</span>
                                </div>
                            </div>
                            <Nav className="ml-auto mr-10" navbar>
                                <NavItem className="unavbut">
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-user-plus fa-lg"></span> Register
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </BrowserRouter>
                </div>

                    <div className="lower_nav">
                        <BrowserRouter>
                            <Navbar dark expand="md">
                                <div className="container">
                                    <NavbarToggler className="lower_nav_but" onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                        <Nav className="lower_nav_sub" navbar>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/home">
                                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/aboutus">
                                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/menu">
                                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/contactus">
                                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                            </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </div>
                            </Navbar>
                        </BrowserRouter>
                    </div>

                    <Jumbotron className="jumbo">
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Varuna</h1>
                                    <p>We provide information about History, Location and Condition of Damaged River Banks.</p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;