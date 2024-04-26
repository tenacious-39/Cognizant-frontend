import { useEffect, useState } from "react";
import axios from "axios";
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import { toast, Toaster } from "react-hot-toast";


function Schedulemr({ mrs, setMrs, doctors, setDoctors }) {

    const [medicines, setMedicines] = useState([]);
    const [schedule, setSchedule] = useState({});
    const [smr, setSmr] = useState({});
    const [sdr, setSdr] = useState({});

    useEffect(() => {
        // console.log(mrs);

        if (!mrs || mrs.length === 0) {
            axios.get("http://localhost:8765/doctor-service/mr/allMrs")
                .then((res) => {
                    if (res.data) {
                        setMrs(res.data);
                        setSmr({ ...smr, mrId: res.data[0].mrId });
                    }
                })
                .catch(err => console.error(err));
        }

        if (!doctors || doctors.length === 0) {
            axios.get("http://localhost:8765/doctor-service/doctor/allDoctors")
                .then((res) => {
                    if (res.data) {
                        setDoctors(res.data);
                        setSdr({ ...sdr, doctorId: res.data[0].doctorId });
                    }
                })
                .catch(err => console.error(err));
        }

        if (!medicines || medicines.length === 0) {
            axios.get("http://localhost:8765/medicine-service/medicine/allMedicines")
                .then((res) => {
                    if (res.data.success === true) {
                        setMedicines(res.data.data);
                        setSchedule({ ...schedule, medicineId: res.data.data[0].medicineId });
                    }
                })
                .catch(err => console.error(err));
        }
    }, []);


    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === "medicineId") {
            setSchedule({ ...schedule, medicineId: value });
        } else if (name === "date") {
            setSchedule({ ...schedule, date: value });
        }
    }

    const handleMrChange = (e) => {
        e.preventDefault();
        setSmr({ ...smr, mrId: e.target.value });
        console.log(smr, e.target.value);
    }
    const handleDrChange = (e) => {
        e.preventDefault();
        setSdr({ ...sdr, doctorId: e.target.value });
    }

    const scheduleMr = (e) => {
        e.preventDefault();
        for (let i = 0; i < doctors.length; i++) {
            if (doctors[i].doctorId === sdr.doctorId) {
                setSchedule({ ...schedule, ailment: doctors[i].specialization });
            }
        }
        schedule.mr = smr;
        schedule.doctor = sdr;
        console.log(schedule)
        axios.post("http://localhost:8765/doctor-service/schedule/addSchedule",
            schedule,
            {
                headers: {
                    "Authorization": localStorage.getItem("Authorization")
                }
            }
        )
            .then((res) => {
                if (res.data.success === true) {
                    toast.success("Schedule added successfully!!!");
                }
            })
            .catch((err) => {
                console.eror(err);
                toast.error("Error occurred!!");
            })
    }


    return (
        <>
            <form className="mb-3 ml-3 mr-3">
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select Doctor</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleDrChange}>
                        {doctors.map((doctor) => {
                            return (<option name="doctor" ailment={doctor.specialization} value={doctor.doctorId}>{doctor.name}</option>);
                        })}
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select Medical Representative</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleMrChange}>
                        {mrs.map((mr) => {
                            return (<option name="mr" value={mr.mrId}>{mr.name}</option>);
                        })}
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select Medicine</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleChange}>
                        {
                            medicines.map((medicine) => {
                                return (<option name="medicineId" value={medicine.medicineId}>{medicine.name}</option>);
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlSelect1">Select date</label>
                    <input type="date" class="form-control" id="exampleFormControlSelect1" name="date" onChange={handleChange} />
                </div>

                <button className="btn btn-outline-primary" onClick={scheduleMr}>
                    <AddTaskRoundedIcon className="mr-1" />
                    Schedule
                </button>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
}

export default Schedulemr;