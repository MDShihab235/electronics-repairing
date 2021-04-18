import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a class="navbar-brand ms-3" href="#">Electronics Repairing</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item active">
                        <a className="nav-link me-3 text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3 text-white" href="#"><Link to="/dashboard">Dashboard</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3 text-white" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3 text-white" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3 text-white" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3 text-white" href="#"><Link to="/AddEngineer">Admin</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3 text-white" href="#"><Link to="/login">Login</Link></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;