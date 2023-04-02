



import React from "react";
import {Navigate, Outlet} from "react-router-dom";


const ProtectedRoutes = () => {
    const loggedIn = localStorage.getItem('isLoggedIn');

    const auth = loggedIn;

    return auth ? <Outlet />: <Navigate to='/loginpage' />
}

export default ProtectedRoutes;