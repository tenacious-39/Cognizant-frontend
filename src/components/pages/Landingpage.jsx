import Home from "../home/Home";
import Navbar from "../navigation/Navbar";
import Divider from '@mui/material/Divider';

function Landingpage() {
    return (
        <>
            <div className="landing-page">
                <Navbar />
                <Divider className="navbar-divider" />
                <Home />
            </div>
        </>
    );
}

export default Landingpage;