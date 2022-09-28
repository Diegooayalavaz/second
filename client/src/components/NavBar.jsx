import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogOutButton from "./auth/LogOutButton";

const NavBar = () => {

    const { loggedIn } = useContext(AuthContext);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    {
                        loggedIn === false && (
                            <>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            </>
                        )
                    }
                    {
                        loggedIn === true && (
                            <>
                                <li className="nav-item">
                                    <Link to="/customers" className="nav-link">Customers</Link>
                                </li>
                                <li>
                                    <LogOutButton />
                                </li>
                            </>
                        )
                    }



                </ul>
            </div>
        </nav>
    );
}

export default NavBar;