import { Divider } from "@mui/material";
import Navbar from "../navigation/Navbar";
import contactus from "../../assets/images/contactus.png"
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    return (
        <div className="contact-us-wrap">
            <Navbar />
            <Divider className="navbar-divider" />

            <div className="about-page-heading">
                <h1 className="kanit-medium">Get in touch</h1>
            </div>

            <div className="contact-us-page">
                <div className="contact-us-page-left">
                    <img src={contactus} alt="contact us" />
                </div>

                <div className="contact-us-page-right">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Full name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary">
                            Send <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;