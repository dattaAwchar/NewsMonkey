import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/newsMonkey">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={isActive("/") || isActive("/home")} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/india")} to="/india">India</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/us")} to="/us">USA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/business")} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/entertainment")} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/health")} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/science")} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/sports")} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/technology")} to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/general")} to="/general">General</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
