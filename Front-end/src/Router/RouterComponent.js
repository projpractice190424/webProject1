import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from '../Components/MainPage.js';

class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ height: "100vh" }}>
                    <Route exact path="/" component={MainPage} />
                    {/* <Route exact path="/MainPage" component={MainPage} /> */}
                </div>
            </Router>
        );
    }
}

export default RouterComponent;
