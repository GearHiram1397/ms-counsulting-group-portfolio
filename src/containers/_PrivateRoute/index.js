import React, { Component, Fragment } from 'react';
import {Route} from "react-router-dom";

export class PrivateRoute extends Component {
    render() {
        const Component = this.props.component;
        return (
            <Fragment>
                <Route {...this.props} render={props => <Component {...props} />} />
            </Fragment>
        );
    }
}

export default PrivateRoute;
