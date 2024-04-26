import { Divider } from "@mui/material";
import Navbar from "../../navigation/Navbar";
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import { useState } from "react";
import Checkdemand from "./Checkdemand";
import Allmrs from "./Allmrs";
import Alldoctors from "./Alldoctors";
import Addmedicine from "./Addmedicine";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Schedulemr from "./Schedulemr";

function Admindashboard({ handleLogout }) {

    const [tabNo, setTabNo] = useState("1");
    const [mrs, setMrs] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.value === "4") {
            handleLogout();
            return;
        }
        setTabNo(e.target.value);
    }

    function GetComponent({ compName, value, Icon }) {
        return (
            <button className="btn btn-outline-primary"
                value={value}
                onClick={handleClick}
                style={{
                    width: "20vw",
                    height: "50px",
                    backgroundColor: "#aceaf2",
                    color: "black",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: 0
                }}>
                <Icon className="mr-1" />
                {compName}
            </button>
        );
    }

    return (
        <>
            <Navbar />
            <Divider className="navbar-divider" />

            <div className="about-page-heading">
                <h1 className="kanit-medium">Admin Dashboard</h1>
            </div>

            <div className="rounded admin-mainframe ml-3 mr-3 mt-5" style={{
                display: "flex"
            }}>
                <div className="admin-left-panel" style={{ width: "20vw" }} >
                    <GetComponent compName={"Check Demand"} value="1" Icon={ListAltRoundedIcon} />
                    <GetComponent compName={"Schedule MR"} value="2" Icon={AddTaskRoundedIcon} />
                    <GetComponent compName={"Add New Medicine"} value="3" Icon={AddBoxRoundedIcon} />
                    <GetComponent compName={"All MRs"} value="5" Icon={ListRoundedIcon} />
                    <GetComponent compName={"All Doctors"} value="6" Icon={ListRoundedIcon} />
                    <GetComponent compName={"Logout"} value="4" Icon={LogoutRoundedIcon} />
                </div>
                <div className="admin-left-panel ml-2" style={{
                    width: "70vw",
                    height: "300px",
                    overflow: "scroll"
                }}>
                    {(tabNo === "1") && <Checkdemand />}
                    {(tabNo === "2") && <Schedulemr mrs={mrs} setMrs={setMrs} doctors={doctors} setDoctors={setDoctors} />}
                    {(tabNo === "3") && <Addmedicine />}
                    {/* {(tabNo === "4") && <Addmedicine />} */}
                    {(tabNo === "5") && <Allmrs setAllMrs={setMrs} />}
                    {(tabNo === "6") && <Alldoctors setAllDoctors={setDoctors} />}
                </div>
            </div>
        </>
    );
}

export default Admindashboard;