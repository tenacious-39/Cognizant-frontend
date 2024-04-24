import { useEffect, useState } from "react";
import axios from "axios";

function Mrschedule() {

    const getCurrentDate = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = `0${month}`;
        let currentDate = `${year}-${month}-${day}`;
        return (currentDate);
    }

    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        const doctorId = sessionStorage.getItem("doctorId");
        if (doctorId !== null) {
            axios.get(`http://localhost:8765/doctor-service/schedule/byDoctor/${doctorId}`)
                .then((res) => {
                    // console.log(res.data);
                    setSchedules(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, []);


    return (<>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Medicine Rep. Name</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">MR Contact No</th>
                    <th scope="col">MR Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    schedules.map((schedule) => {
                        console.log(getCurrentDate());
                        if (getCurrentDate() <= schedule.date)
                            return (
                                <tr>
                                    <td>{schedule.mr.name}</td>
                                    <td>{schedule.date}</td>
                                    <td>{schedule.mr.phoneNumber}</td>
                                    <td>{schedule.mr.email}</td>
                                </tr>
                            );
                    })
                }
            </tbody>
        </table>
    </>);
}

export default Mrschedule;