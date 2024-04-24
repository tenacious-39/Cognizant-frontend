import { useEffect, useState } from "react";
import axios from "axios";

function Doctorschedule() {
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
        const mrId = sessionStorage.getItem("mrId");
        if (mrId !== null) {
            axios.get(`http://localhost:8765/doctor-service/schedule/byMr/${mrId}`)
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
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Doctor Contact No</th>
                    <th scope="col">Doctor Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    schedules.map((schedule) => {
                        if (getCurrentDate() <= schedule.date) {
                            return (
                                <tr>
                                    <td>{schedule.doctor.name}</td>
                                    <td>{schedule.date}</td>
                                    <td>{schedule.doctor.phoneNumber}</td>
                                    <td>{schedule.doctor.email}</td>
                                </tr>
                            );
                        }
                        return (<></>);
                    })
                }
            </tbody>
        </table>
    </>);
}

export default Doctorschedule;