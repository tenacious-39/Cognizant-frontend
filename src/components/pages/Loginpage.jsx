import Navbar from "../navigation/Navbar";
import { Divider } from "@mui/material";
import loginimg from "../../assets/images/login.png"
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function Loginpage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        axios.post("http://localhost:8765/auth-service/auth/login", {
            username: email,
            password: password
        })
            .then((response) => {
                if (response.data.success === true) {
                    localStorage.setItem("Authorization", response.data.token);
                    props.setLoggedIn(true);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="login-page">
            <Navbar />
            <Divider className="navbar-divider" />
            <div className="about-page-heading">
                <h1 className="kanit-medium">Login</h1>
            </div>

            <div className="contact-us-page">
                <div className="contact-us-page-left">
                    <img src={loginimg} alt="login" />
                </div>

                <div className="contact-us-page-right">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter your password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" onClick={handleLogin}>
                            Login <LoginRoundedIcon />
                        </button>
                    </form>

                    <div className="signup-option mt-5">
                        Don’t you have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;