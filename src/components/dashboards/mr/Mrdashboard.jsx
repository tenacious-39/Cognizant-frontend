import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../../navigation/Navbar";
import Doctorschedule from "./Doctorschedule";
import Editprofile from "./Editprofile";
import axios from "axios";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';


function Mrdashboard({ handleLogout }) {

    useEffect(() => {
        const email = sessionStorage.getItem("username");
        if (email !== null) {
            axios.get(`http://localhost:8765/doctor-service/mr/byEmail/${email}`)
                .then((res) => {
                    // console.log(res.data);
                    const mrId = res.data.mrId;
                    sessionStorage.setItem("mrId", mrId);
                })
                .catch((err) => console.error(err));
        }
    }, []);

    const [tabNo, setTabNo] = useState("1");

    const handleClick = (e) => {
        e.preventDefault();
        setTabNo(e.target.value);
    }

    return (
        <>
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
                                <ListRoundedIcon className="mr-1" />
                                Doctor Schedule
                            </button>
                        </div>
                        <div className="dashboard-card-heading-tab">
                            <button className="btn btn-primary" value="2"
                                onClick={handleClick}>
                                Edit Profile
                                <EditRoundedIcon className="ml-1" />
                            </button>
                        </div>

                        <div className="dashboard-card-heading-tab ml-auto">
                            <button className="btn btn-primary logout-btn"
                                onClick={handleLogout}>
                                <LogoutRoundedIcon />
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="dashboard-body mt-2 mb-3 ml-5 mr-5">
                        {
                            (tabNo === "1") ? <Doctorschedule /> : <Editprofile />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mrdashboard;