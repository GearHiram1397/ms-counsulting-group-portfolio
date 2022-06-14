import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import PorfolioGrid from "../PorfolioGrid";
import PorfolioGrid2 from "../PorfolioGrid2";
import PorfolioGrid3 from "../PorfolioGrid3";
import ServiceDetails from "../ServiceDetails";
import ProjectDetails1 from "../ProjectDetails/index1";
import ProjectDetails2 from "../ProjectDetails/index2";
import ProjectDetails3 from "../ProjectDetails/index3";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
import ContactPage from "../ContactPage";
import BlogPage from "../BlogPage";
import BlogDetailsFull from "../BlogFull";
import BlogDetailsPage from "../BlogDetailsPage";
import BlogDetailsFullwidth from "../BlogDetailsFullwidth";

// Normal Route
// import PrivateRoute from "../_PrivateRoute";
// import PublicRoute from "../_PublicRoute";

export default function Rout() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<HomePage/>}
            />
            <Route
                path="/home"
                element={<HomePage/>}
            />
               
            <Route
                path="/about"
                element={<AboutPage/>}
            />
            <Route
                path="/protfolioGrid"
                element={<PorfolioGrid/>}
            />
            <Route
                path="/protfolioGrid2"
                element={<PorfolioGrid2/>}
            />
            <Route
                path="/protfolioMashonary"
                element={<PorfolioGrid3/>}
            />
            <Route
                path="/serviceDetails"
                element={<ServiceDetails/>}
            />
            <Route
                path="/projectDetails"
                element={<ProjectDetails/>}
            />
             <Route
                path="/projectDetails/1"
                element={<ProjectDetails1/>}
            />
              <Route
                path="/projectDetails/2"
                element={<ProjectDetails2/>}
            />  <Route
            path="/projectDetails/3"
            element={<ProjectDetails3/>}
        	 />
            <Route
                path="/404"
                element={<ErroPage/>}
            />
            <Route
                path="/contact"
                element={<ContactPage/>}
            />
            <Route
                path="/blog"
                element={<BlogPage/>}
            />
            <Route
                path="/blogfullwidth"
                element={<BlogDetailsFull/>}
            />
            <Route
                path="/blog-details"
                element={<BlogDetailsPage/>}
            />
            <Route
                path="/blog-details-fullwidth"
                element={<BlogDetailsFullwidth/>}
            />
            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            <Route exact element={<HomePage/>} />
        </Routes>
    );
}
