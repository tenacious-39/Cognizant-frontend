import { useEffect, useState } from "react";
import userimg from "../../../assets/images/user-image.jpg";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';


function Editprofile() {

    const [doctor, setDoctor] = useState(null);
    useEffect(() => {
        const doctorId = sessionStorage.getItem("doctorId");
        if (doctorId) {
            axios.get(`http://localhost:8765/doctor-service/doctor/${doctorId}`)
                .then((res) => {
                    console.log(res.data);
                    setDoctor(res.data);
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
            setDoctor({
                ...doctor,
                phoneNumber: value
            });
        } else if (name === "name") {
            setDoctor({
                ...doctor,
                name: value
            });
        } else if (name === "clinicLocation") {
            setDoctor({
                ...doctor,
                clinicLocation: value
            });
        } else if (name === "specialization") {
            setDoctor({
                ...doctor,
                specialization: value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (doctor) {
            axios.put(`http://localhost:8765/doctor-service/doctor/updateDoctor`,
                doctor,
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
                <label for="exampleInputEmail1">Doctor ID</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={doctor ? doctor.doctorId : ""} readOnly />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={doctor ? doctor.email : ""} readOnly />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Doctor Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="name" value={doctor ? doctor.name : ""} onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Contact No</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="phoneNumber" value={doctor ? doctor.phoneNumber : ""} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Specialization</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="specialization" value={doctor ? doctor.specialization : ""} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Clinic Location</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="clinicLocation" value={doctor ? doctor.clinicLocation : ""} onChange={handleChange}
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