import React from 'react';  
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/common/main.scss';
import Login from './components/login/Login'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Loader from './components/common/loader/Loader';
import { Routes,Route } from 'react-router-dom'
import SecureRoutes from './routes/SecureRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
        <SecureRoutes/>
        <ToastContainer/>
        <Loader/>
    </BrowserRouter>
</Provider>
   
);

