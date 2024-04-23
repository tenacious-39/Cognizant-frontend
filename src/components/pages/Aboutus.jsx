import { Divider } from "@mui/material";
import Navbar from "../navigation/Navbar";
import aboutusimg from "../../assets/images/aboutus.jpg";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Link } from "react-router-dom";

function Aboutus() {
    return (
        <div className="about-us-wrap">
            <Navbar />
            <Divider className="navbar-divider" />

            <div className="about-page-heading">
                <h1 className="kanit-medium">About Us</h1>
            </div>

            <div className="about-us-page">
                <div className="about-left-panel">
                    <img src={aboutusimg} alt="medicine" />
                </div>
                <div className="about-right-panel">
                    <h4>About Vitacure Labs</h4>
                    <p>
                        Welcome to Vitacure Labs, where health and innovation meet to create a brighter future for
                        all. Our journey began with a simple yet profound mission: to provide effective,
                        high-quality pharmaceutical solutions that enhance the well-being of communities worldwide.

                        At Vitacure Labs, we believe in the power of science to transform lives.
                        Our state-of-the-art facilities are home to a dedicated team of researchers,
                        scientists, and healthcare professionals who are committed to excellence.
                        With a relentless pursuit of innovation, we develop a diverse range of products
                        that cater to various health needs, from over-the-counter medications to prescription drugs.
                    </p>
                    <p>
                        Join us on our journey to a healthier tomorrow.
                        <b><i>Vitacure Labs – Your Partner in Health.</i></b>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Aboutus;