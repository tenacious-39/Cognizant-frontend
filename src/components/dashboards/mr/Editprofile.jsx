import { useEffect, useState } from "react";
import userimg from "../../../assets/images/user-image.jpg";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

function Editprofile() {

    const [mr, setMr] = useState(null);
    useEffect(() => {
        const mrId = sessionStorage.getItem("mrId");
        if (mrId) {
            axios.get(`http://localhost:8765/doctor-service/mr/${mrId}`)
                .then((res) => {
                    console.log(res.data);
                    setMr(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        if (name === "phoneNumber") {
            setMr({
                ...mr,
                phoneNumber: value
            });
        } else if (name === "name") {
            setMr({
                ...mr,
                name: value
            });
        } else if (name === "workLocation") {
            setMr({
                ...mr,
                workLocation: value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mr) {
            axios.put(`http://localhost:8765/doctor-service/mr/updateMr`,
                mr,
                {
                    headers: {
                        "Authorization": localStorage.getItem("Authorization")
                    }
                }
            )
                .then((res) => {
                    if (res.data) {
                        toast.success("Profile updated successfully!");
                    }
                })
                .catch((err) => {
                    console.error(err);
                    toast.error("Error occurred!!")
                }
                );
        }
    }

    return (<>
        <div style={{
            textAlign: "center",
        }}>
            <img src={userimg} alt="doctor" height={"120px"} style={{
                borderRadius: "100%"
            }} />
        </div>

        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">MR ID</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={mr ? mr.mrId : ""} readOnly />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={mr ? mr.email : ""} readOnly />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Medical Representative Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="name" value={mr ? mr.name : ""} onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Contact No</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="phoneNumber" value={mr ? mr.phoneNumber : ""} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Work Location</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="workLocation" value={mr ? mr.workLocation : ""} onChange={handleChange}
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
    </>);
}

export default Editprofile;