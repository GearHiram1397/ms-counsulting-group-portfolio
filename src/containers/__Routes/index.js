import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";

import PorfolioGrid2 from "../PorfolioGrid2";
import PorfolioGrid3 from "../PorfolioGrid3";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
import ContactPage from "../ContactPage";

// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                path="/home"
                component={HomePage}
            />
            <PrivateRoute
                path="/about"
                component={AboutPage}
            />
           
            <PrivateRoute
                path="/protfolioGrid2"
                component={PorfolioGrid2}
            />
            <PrivateRoute
                path="/protfolioMashonary"
                component={PorfolioGrid3}
            />
           
            <PrivateRoute
                path="/projectDetails"
                component={ProjectDetails}
            />
            <PrivateRoute
                path="/404"
                component={ErroPage}
            />
            <PrivateRoute
                path="/contact"
                component={ContactPage}
            />
        
            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            <Route exact component={HomePage} />
        </Switch>
    );
}
