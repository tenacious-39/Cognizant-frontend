import { useEffect, useState } from "react";
import axios from "axios";

function Allmrs({ setAllMrs }) {

    const [mrs, setMrs] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8765/doctor-service/mr/allMrs")
            .then((res) => {
                // console.log(res.data);
                setMrs(res.data);
                setAllMrs(res.data);
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
                        <th scope="col">Contact No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mrs.map((mr) => {
                            return (
                                <tr>

                                    <td>{mr.mrId}</td>
                                    <td>{mr.name}</td>
                                    <td>{mr.phoneNumber}</td>
                                    <td>{mr.email}</td>
                                    <td>{mr.workLocation}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Allmrs;