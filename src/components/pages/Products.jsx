import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navigation/Navbar";
import { Divider } from "@mui/material";

function Products() {

    const [prodList, setProdList] = useState([]);
    const [allMedicines, setAllMedicines] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8765/medicine-service/medicine/allMedicines")
            .then((res) => {
                // console.log(res.data.data);
                setProdList(res.data.data);
                setAllMedicines(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleCategory = (e) => {
        e.preventDefault();
        const cat = e.target.value;
        const newList = [];
        if (cat === "all") {
            setProdList(allMedicines);
        } else {
            for (let i = 0; i < allMedicines.length; i++) {
                if (allMedicines[i].targetAilment === cat) {
                    newList.push(allMedicines[i]);
                }
            }
            setProdList(newList);
        }
    }

    const getCard = (medicine) => {
        return (<>
            <div className="card rounded shadow" style={{
                width: "18rem"
            }}>
                <div className="card-body">
                    <h5 className="card-title">{medicine.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Category: {medicine.targetAilment}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Stock: {medicine.stockAmount}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Composition: {medicine.composition}</h6>
                    <p className="card-text">{medicine.description}</p>
                </div>
            </div>
        </>);
    }

    return (
        <>
            <Navbar />
            <Divider className="navbar-divider" />

            <div className="about-page-heading" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "42px" }}>
                <form style={{ width: "200px" }}>
                    <div>
                        <label className="mr-1" style={{ fontSize: "18px", fontWeight: "600" }}>Category:</label>
                        <select onChange={handleCategory}>
                            <option value="all">All</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="General">General</option>
                            <option value="Neurology">Neurology</option>
                        </select>
                    </div>
                </form>
            </div>

            <div className="medicine-list mt-5 pl-4" style={{
                display: "flex", flexWrap: "wrap", gap: "16px"
            }}>
                {
                    prodList.map((prod) => getCard(prod))
                }
            </div>
        </>
    );
}

export default Products;