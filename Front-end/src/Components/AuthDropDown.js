import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Modal, Dropdown, Button } from 'react-bootstrap';


@inject('rootStore')
@observer
export default class AuthDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.rootStore = this.props.rootStore;
        this.authStore = this.rootStore.authStore;
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    handleClose() {
        this.authStore.isLogin = false;
    }


    handleShow() {
        this.authStore.isLogin = true;
    }

    googleLogin = () => {
        alert("Google lOGIN");
    }

    facebookLogin = () => {
        alert("Facebook login");
    }

    render() {
        return (
            <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"  onClick={() => this.handleShow()}>Sign in</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        );
    }
}