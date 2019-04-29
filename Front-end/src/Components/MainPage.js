import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';


@inject('rootStore')
@observer
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.rootStore = this.props.rootStore;
        this.authStore = this.rootStore.authStore;
    }

    render() {
        return (
            <div>
                <p>{this.rootStore.test}</p>
            </div>
        );
    }
}