/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import '../assets/scss/App.scss';
import '../assets/scss/Home.scss';
import 'react-toastify/dist/ReactToastify.css';

import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from '../components/NavBar';
import Layout from '../containers/Layout';
import error from '../Icons/toastError.svg';
import success from '../Icons/toastSuccess.svg';
import { MainRoute, Routes } from '../routes';
import DialogsContainer from './DialogsContainer';

const CloseButton = ({ type, closeToast }) => {
    return (
        <img
            src={type === 'success' ? success : error}
            width={24}
            height={24}
            onClick={closeToast}
            style={{ marginTop: 12, marginRight: 5 }}
        />
    );
};
const routes = Object.values(Routes).map((route) => (
    <Route
        key={route.link}
        component={({ location, ...props }) => {
            if (location.pathname === '/' && location.hash === '') {
                return <Redirect to={MainRoute.link} />;
            }
            return (
                (`${location.pathname}`.startsWith(route.link) ||
                    `/${location.hash}`.startsWith(route.link)) &&
                React.cloneElement(route.component, { location, ...props })
            );
        }}
    />
));

function App() {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={CloseButton}
            />
            <DialogsContainer />
            <Navbar />
            <Layout>{routes}</Layout>
        </div>
    );
}

export default App;
