import { useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { toast, Toaster } from "react-hot-toast";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';


function Addmedicine() {
    const [medicine, setMedicine] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        if (name === "name") {
            setMedicine({ ...medicine, name: value });
        } else if (name === "comp") {
            setMedicine({ ...medicine, composition: value });
        } else if (name === "desc") {
            setMedicine({ ...medicine, description: value });
        } else if (name === "ailment") {
            setMedicine({ ...medicine, targetAilment: value });
        } else if (name === "amount") {
            setMedicine({ ...medicine, stockAmount: value });
        }
    }

    const saveMedicine = (e) => {
        e.preventDefault();
        const medicineId = nanoid(6);
        medicine.medicineId = medicineId;
        axios.post("http://localhost:8765/medicine-service/medicine/add",
            medicine, {
            headers: {
                "Authorization": localStorage.getItem("Authorization")
            }
        })
            .then((res) => {
                if (res.data.success === true) {
                    toast.success("Successfully added the medicine");
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <>
            <form className="ml-3 mr-3 mb-2">
                <div class="form-group">
                    <label for="exampleInputEmail1">Medicine Name</label>
                    <input type="text" onChange={handleChange} value={medicine ? medicine.name : ""}
                        name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Medicine Composition</label>
                    <input type="text" onChange={handleChange} name="comp" value={medicine ? medicine.composition : ""}
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea onChange={handleChange} name="desc" class="form-control" value={medicine ? medicine.description : ""}
                        id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1" name="ailment">
                        Target Ailment
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1" name="ailment" onChange={handleChange}>
                        <option name="ailment" value="Orthopedics" onClick={handleChange}>Orthopedic</option>
                        <option name="ailment" value="Neurology" onClick={handleChange}>Neurology</option>
                        <option name="ailment" value="General" onClick={handleChange}>General</option>
                        <option name="ailment" value="Cardiology" onClick={handleChange}>Cardiology</option>
                        <option name="ailment" value="Urology" onClick={handleChange}>Urology</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Stock Amount</label>
                    <input type="number" onChange={handleChange} name="amount" value={medicine ? medicine.stockAmount : ""}
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" onClick={saveMedicine} class="btn btn-primary">
                    <AddBoxRoundedIcon className="mr-1" />
                    Add Medicine</button>
            </form>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
}

export default Addmedicine;