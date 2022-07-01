import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import PorfolioGrid3 from "../PorfolioGrid3";
import ServiceDetails from "../ServiceDetails";
import ProjectDetails1 from "../ProjectDetails/index1";
import ProjectDetails2 from "../ProjectDetails/index2";
import ProjectDetails3 from "../ProjectDetails/index3";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
import ContactPage from "../ContactPage";


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
                path="/portfolio"
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
            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            <Route exact element={<HomePage/>} />
        </Routes>
    );
}
