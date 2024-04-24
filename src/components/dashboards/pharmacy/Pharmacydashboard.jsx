import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../../navigation/Navbar";
import Allorders from "./Allorders";
import Editprofile from "./Editprofile";
import Placeorder from "./Placeorder";
import axios from "axios";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


function Pharmacydashboard({ handleLogout }) {

    useEffect(() => {
        const email = sessionStorage.getItem("username");
        if (email !== null) {
            axios.get(`http://localhost:8765/pharmacy-service/pharmacy/byEmail/${email}`)
                .then((res) => {
                    const pharmaId = res.data.data.pharmaId;
                    sessionStorage.setItem("pharmaId", pharmaId);
                })
                .catch((err) => console.error(err));
        }
    }, []);

    const [tabNo, setTabNo] = useState("1");
    const handleClick = (event) => {
        event.preventDefault();
        setTabNo(event.target.value);
    }

    return (
        <div className="dashboard">
            <Navbar />
            <Divider className="navbar-divider" />

            <div className="about-page-heading">
                <h1 className="kanit-medium">Dashboard</h1>
            </div>

            <div className="card shadow rounded dashboard-card mt-3">
                <div className="dashboard-card-heading">
                    <div className="dashboard-card-heading-tab" style={{
                        borderLeft: "1px solid",
                        borderTopLeftRadius: "2px",
                        borderBottomLeftRadius: "2px"
                    }}>
                        <button className="btn btn-primary" value="1"
                            onClick={handleClick}>
                            <ShoppingCartRoundedIcon className="mr-1" />
                            Place Order</button>
                    </div>
                    <div className="dashboard-card-heading-tab">
                        <button className="btn btn-primary" value="2"
                            onClick={handleClick}>
                            <ListRoundedIcon className="mr-1" />
                            All Orders</button>
                    </div>
                    <div className="dashboard-card-heading-tab">
                        <button className="btn btn-primary" value="3"
                            onClick={handleClick}>
                            Edit Profile
                            <EditRoundedIcon className="ml-1" />
                        </button>
                    </div>

                    <div className="dashboard-card-heading-tab ml-auto">
                        <button className="btn btn-primary logout-btn"
                            onClick={handleLogout}>
                            Logout
                            <LogoutRoundedIcon />
                        </button>
                    </div>
                </div>

                <div className="dashboard-body mt-2 mb-3 ml-5 mr-5">
                    {
                        (tabNo === "1") ? <Placeorder /> :
                            (tabNo === "2") ? <Allorders /> : <Editprofile />
                    }
                </div>
            </div>
        </div>
    );
}

export default Pharmacydashboard;