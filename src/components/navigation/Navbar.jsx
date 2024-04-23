import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useEffect, useState } from "react";


function Navbar() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('Authorization');
        if (token != null) {
            setLoggedIn(true);
        }
    }, []);

    function getLoginRoute() {
        if (isLoggedIn === true) {
            const role = sessionStorage.getItem("role");
            if (role === "ROLE_ADMIN") {
                return "/admin/dashboard"
            } else if (role === "ROLE_DOCTOR") {
                return "/doctor/dashboard"
            } else if (role === "ROLE_PHARMACY") {
                return "/pharmacy/dashboard"
            } else if (role === "ROLE_MR") {
                return "/mr/dashboard"
            }
        }
        return "/login";
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light roboto-font-medium">
                <Link className="navbar-brand" to="/">Vitacure Labs</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <button type="button" className="btn btn-link">
                                    <HomeRoundedIcon sx={{ fontSize: 20 }} />
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                <button type="button" className="btn btn-link">
                                    <CategoryRoundedIcon sx={{ fontSize: 20 }} />
                                    Our Products
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <button type="button" className="btn btn-link">
                                    <InfoRoundedIcon sx={{ fontSize: 20 }} />
                                    About Us
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                <button type="button" className="btn btn-link navbar-btn">
                                    <ConnectWithoutContactRoundedIcon sx={{ fontSize: 20 }} />
                                    Contact Us
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={getLoginRoute()}>
                                <button type="button" className="btn btn-primary login-btn">
                                    {isLoggedIn ? "Dashboard" : "Login"} <AccountCircleRoundedIcon />
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;