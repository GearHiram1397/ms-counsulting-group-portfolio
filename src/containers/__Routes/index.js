import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import HomePage2 from "../HomePage2";
import HomePage3 from "../HomePage3";
import HomePage4 from "../HomePage4";
import HomePage5 from "../HomePage5";
import HomePage6 from "../HomePage6";
import HomePage7 from "../HomePage7";
import HomePage8 from "../HomePage8";
import HomePage9 from "../HomePage9";
import HomePage10 from "../HomePage10";
import AboutPage from "../AboutPage";
import PorfolioGrid from "../PorfolioGrid";
import PorfolioGrid2 from "../PorfolioGrid2";
import PorfolioGrid3 from "../PorfolioGrid3";
import PorfolioGrid4 from "../PorfolioGrid4";
import PorfolioGridCro from "../PorfolioGridCro";
import ServiceDetails from "../ServiceDetails";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
import ContactPage from "../ContactPage";
import BlogPage from "../BlogPage";
import BlogDetailsFull from "../BlogFull";
import BlogDetailsPage from "../BlogDetailsPage";
import BlogDetailsFullwidth from "../BlogDetailsFullwidth";

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
                path="/home2"
                component={HomePage2}
            />
            <PrivateRoute
                path="/home3"
                component={HomePage3}
            />
            <PrivateRoute
                path="/home4"
                component={HomePage4}
            />
            <PrivateRoute
                path="/home5"
                component={HomePage5}
            />
            <PrivateRoute
                path="/home6"
                component={HomePage6}
            />
            <PrivateRoute
                path="/home7"
                component={HomePage7}
            />
            <PrivateRoute
                path="/home8"
                component={HomePage8}
            />
            <PrivateRoute
                path="/home9"
                component={HomePage9}
            />
            <PrivateRoute
                path="/home10"
                component={HomePage10}
            />
            <PrivateRoute
                path="/about"
                component={AboutPage}
            />
            <PrivateRoute
                path="/protfolioGrid"
                component={PorfolioGrid}
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
                path="/protfolioList"
                component={PorfolioGrid4}
            />
            <PrivateRoute
                path="/protfolioCro"
                component={PorfolioGridCro}
            />
            <PrivateRoute
                path="/serviceDetails"
                component={ServiceDetails}
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
            <PrivateRoute
                path="/blog"
                component={BlogPage}
            />
            <PrivateRoute
                path="/blogfullwidth"
                component={BlogDetailsFull}
            />
            <PrivateRoute
                path="/blog-details"
                component={BlogDetailsPage}
            />
            <PrivateRoute
                path="/blog-details-fullwidth"
                component={BlogDetailsFullwidth}
            />
            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            <Route exact component={HomePage} />
        </Switch>
    );
}
