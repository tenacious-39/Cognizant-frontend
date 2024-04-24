import { useEffect, useState } from "react";
import userimg from "../../../assets/images/user-image.jpg";
import axios from "axios";
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { toast, Toaster } from "react-hot-toast";

function Editprofile() {

    const [pharmacy, setPharmacy] = useState(null);
    useEffect(() => {
        const pharmaId = sessionStorage.getItem("pharmaId");
        if (pharmaId) {
            axios.get(`http://localhost:8765/pharmacy-service/pharmacy/${pharmaId}`)
                .then((res) => {
                    console.log(res.data);
                    setPharmacy(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        if (pharmacy) {
            if (e.target.name === "location") {
                setPharmacy({
                    location: e.target.value,
                    name: pharmacy.name,
                    email: pharmacy.email,
                    pharmaId: pharmacy.pharmaId
                });
            } else {
                setPharmacy({
                    name: e.target.value,
                    location: pharmacy.location,
                    email: pharmacy.email,
                    pharmaId: pharmacy.pharmaId
                });
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8765/pharmacy-service/pharmacy/updatePharmacy`,
            pharmacy,
            {
                headers: {
                    "Authorization": localStorage.getItem("Authorization")
                }
            }
        )
            .then((res) => {
                if (res.data.success === true) {
                    toast.success("Profile updated successfully!");
                } else {
                    throw new Error(res.data.message);
                }
            })
            .catch((err) => toast.error(err.message));
    }

    return (
        <>
            <div style={{
                textAlign: "center",
            }}>
                <img src={userimg} alt="Pharmacy" height={"120px"} style={{
                    borderRadius: "100%"
                }} />
            </div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Pharmacy ID</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={pharmacy ? pharmacy.pharmaId : ""} readOnly />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={pharmacy ? pharmacy.email : ""} readOnly />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Pharmacy Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="pharmacyName" value={pharmacy ? pharmacy.name : ""} onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Pharmacy Location</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="location" value={pharmacy ? pharmacy.location : ""} onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    <SaveRoundedIcon />
                    Save
                </button>
            </form>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
}

export default Editprofile;