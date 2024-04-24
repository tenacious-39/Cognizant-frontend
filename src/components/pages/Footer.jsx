import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function Footer() {

    const UnorderedList = ({ quickLinks, option1, option2, option3 }) => {
        return (
            <ul className='ul-without-style'>
                <li className='quick-link'>{quickLinks}</li>
                <li><Link to="/about">{option1}</Link></li>
                <li><Link to="/contact">{option2}</Link></li>
                <li>{option3}</li>
            </ul>
        );
    }

    return (
        <div className="footer mt-5">
            <div className="footer-social-media">
                <div className="row">
                    <div className="col">
                        <h3>Vitacure Labs</h3>
                    </div>
                    <div className="col footer-social-media-right">
                        <p>Follow us on social platforms:</p>
                        <FacebookRoundedIcon sx={{ fontSize: 35 }} />
                        <XIcon sx={{ fontSize: 32 }} />
                        <LinkedInIcon sx={{ fontSize: 35 }} />
                        <InstagramIcon sx={{ fontSize: 35 }} />
                    </div>
                </div>
            </div>

            <div className='footer-nav-section'>
                <div className='row'>
                    <div className='col-6'>
                        <h5>Contact Us</h5>
                        <p>
                            Vitacure Labs<br />
                            1234 Main Street<br />
                            Chennai, Tamil Nadu 123456<br />
                            Phone: (123) 456-7890<br />
                            Email: info@vitacurelabs.com
                        </p>
                    </div>
                    <div className='col' style={{ textAlign: "center" }}>
                        <UnorderedList quickLinks={"Quick Links"}
                            option1={"About us"}
                            option2={"Contact us"}
                            option3={"Careers"} />
                    </div>

                    <div className='col' style={{ textAlign: "center" }}>
                        <UnorderedList quickLinks={"Our Business"}
                            option1={"Overview"}
                            option2={"Formulations"}
                            option3={"Biologics"} />
                    </div>
                    <div className='col' style={{ textAlign: "center" }}>
                        <UnorderedList quickLinks={"Blogs"}
                            option1={"Overview"}
                            option2={"Newsroom"}
                            option3={"Research"} />
                    </div>
                </div>
            </div>

            <div className='footer-end-section'>
                <p style={{ margin: 0, paddingBottom: "5px" }} className="text-center text-white">© 2024 Vitacure Labs. All rights reserved.</p>
            </div>

        </div>
    );
}

export default Footer;