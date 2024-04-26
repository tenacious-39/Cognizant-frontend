import { useEffect, useState } from "react";
import axios from "axios";

function Alldoctors({ setAllDoctors }) {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8765/doctor-service/doctor/allDoctors")
            .then((res) => {
                setDoctors(res.data);
                setAllDoctors(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Specialization</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Clinic Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor) => {
                            return (
                                <tr>

                                    <td>{doctor.doctorId}</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.phoneNumber}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.clinicLocation}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Alldoctors;