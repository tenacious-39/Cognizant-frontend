import axios from "axios";
import { useEffect, useState } from "react";
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { toast, Toaster } from "react-hot-toast";
import ordermedicine from "../../../assets/images/place-order.jpg";

function Placeorder() {

    const [medicineList, setMedicineList] = useState([]);
    const [name, setName] = useState("Calpol");
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8765/medicine-service/medicine/allMedicines')
            .then((res) => {
                setMedicineList(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    function handlePlaceOrder(event) {
        event.preventDefault();
        axios.post('http://localhost:8765/pharmacy-service/pharmacy/place-order',
            {
                medicineName: name,
                quantity: quantity,
                pharmacy: {
                    pharmaId: sessionStorage.getItem("pharmaId")
                }
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("Authorization")
                }
            })
            .then((res) => {
                if (res.data.success === true) {
                    toast.success('Order placed successfully!')
                }
            }).catch((err) => {
                toast.error("Order cannot be placed!")
                console.error(err);
            });
    }

    return (
        <>
            <div style={{
                textAlign: "center",
            }}>
                <img src={ordermedicine} alt="order medicine" height={"120px"} style={{
                    borderRadius: "100%"
                }} />
            </div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Medicine Name</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setName(e.target.value)}>
                        {
                            medicineList.map((medicine) =>
                                <option value={medicine.name}>{medicine.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-group" >
                    <label for="exampleFormControlInput1">Medicine Quantity</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1"
                        min="1" onChange={
                            (e) => setQuantity(e.target.value)
                        } />
                </div >

                <div>
                    <button className="btn btn-primary" style={{
                        justifyContent: "right"
                    }}
                        onClick={handlePlaceOrder}>
                        <SaveRoundedIcon />
                        Save
                    </button>
                </div>
            </form >
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
}

export default Placeorder;