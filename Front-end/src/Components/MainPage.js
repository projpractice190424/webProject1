import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import LoginModal from './LoginModal.js';
import AuthDropDown from './AuthDropDown.js';


@inject('rootStore')
@observer
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.rootStore = this.props.rootStore;
        this.authStore = this.rootStore.authStore;
    
    }

    render() {
        return (
            <div>
                <AuthDropDown />

                <LoginModal />
                
            </div>

        );
    }
}