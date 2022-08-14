import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

export class PublicRoute extends Component {

  render() {
    return (
      <Fragment>
        <Route
          {...this.props}
          render={props => <Component {...props} />}
        />
      </Fragment>
    );
  }
}

export default PublicRoute;
