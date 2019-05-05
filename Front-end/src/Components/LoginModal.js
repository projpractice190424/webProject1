import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Modal, Dropdown, Button } from 'react-bootstrap';


@inject('rootStore')
@observer
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.rootStore = this.props.rootStore;
        this.authStore = this.rootStore.authStore;
        

        this.handleClose = this.handleClose.bind(this);

    }

    handleClose() {
        this.authStore.isLogin = false;
    }

    googleLogin = () => {
        return this.authStore.signInGoogle();
    }

    facebookLogin = () => {
        return this.authStore.signInFacebook();
    }

    render() {
        return (
            <Modal show={this.authStore.isLogin} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Button onClick={() => this.googleLogin()}> Google </Button>
                    <Button onClick={() => this.facebookLogin()}> Facebook </Button>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}