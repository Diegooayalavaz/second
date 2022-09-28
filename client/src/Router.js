import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Customers from "./components/Customers/Customers";
import Login from "./components/Login";
import AuthContext from "./context/AuthContext";

const Router = () => {

    const { loggedIn } = useContext(AuthContext);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {
                loggedIn === true && <>
                    <Route path='/customers' element={<Customers />} />
                </>
            }
            {
                loggedIn === false && <>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </>
            }

        </Routes>
    );
}

export default Router;