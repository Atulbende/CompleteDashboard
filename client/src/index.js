import React from 'react';  
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/common/main.scss';
import Main from './components/layout/main/Main';
import Login from './components/login/Login'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Loader from './components/common/loader/Loader';
import { Routes,Route } from 'react-router-dom'
import { Routers } from '../src/components/layout/sidenav/MenuList'
import ActionBar from './components/layout/actionbar/ActionBar'
import SideNavbar from './components/layout/sidenav/SideNavbar'
import Header from './components/layout/header/Header'
import Content from './components/layout/content/Content'
import Breadcrumb from './components/layout/breadcrumb/Breadcrumb'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Provider store={store}>
    <BrowserRouter>
        <Routes> 
            <Route path='/' element={<Main/>}>
                <Route   path='/header' element={<Header/>}/> 
                <Route   path='/sidenavbar' element={<SideNavbar/>}/> 
                <Route   path='/breadcrumb' element={<Breadcrumb/>}/> 
                <Route   path='/content' element={<Content/>}/> 
                <Route   path='/actionBar' element={<ActionBar/>}/>
                {Routers.map((val,key)=>{return <Route key={val.link}  path={val.link} element={val.component}/> })}
            </Route>
            <Route   path='/login' element={<Login/>}/>
        </Routes>
        <ToastContainer/>
        <Loader/>
    </BrowserRouter>
</Provider>
   
</React.StrictMode>
);

