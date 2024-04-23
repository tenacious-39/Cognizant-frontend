import { Divider } from "@mui/material";
import Navbar from "../navigation/Navbar";
import signupimg from "../../assets/images/signup.png"
import InputIcon from '@mui/icons-material/Input';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

    const navigateTo = useNavigate();

    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        axios.post("http://localhost:8765/auth-service/auth/signup", {
            username: email,
            password: password,
            role: role
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.success === true) {
                    navigateTo("/login");
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
                <h1 className="kanit-medium">Register with us</h1>
            </div>

            <div className="contact-us-page">
                <div className="contact-us-page-left">
                    <img src={signupimg} alt="signup" />
                </div>

                <div className="contact-us-page-right">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Role</label>
                            <select className="form-control" id="exampleFormControlSelect1"
                                onChange={(e) => setRole(e.target.value)}>
                                <option value={"ROLE_ADMIN"}>Admin</option>
                                <option value={"ROLE_MR"}>Medical Representative</option>
                                <option value={"ROLE_DOCTOR"}>Doctor</option>
                                <option value={"ROLE_PHARMACY"}>Pharmacy</option>
                            </select>
                        </div>
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
                            Sign up <InputIcon />
                        </button>
                    </form>

                    <div className="signup-option mt-5 mb-1">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Signup;