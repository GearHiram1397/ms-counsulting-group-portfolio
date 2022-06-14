import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';


import './css/font-awesome.min.css';
import './css/flaticon.css';
import './css/themify-icons.css';
import './fonts/futura.css';
import 'react-modal-video/scss/modal-video.scss';
import "slick-carousel/slick/slick.css";
//import 'react-id-swiper/lib/styles/scss/swiper.scss';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
