import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navigation/Navbar";
import { Divider } from "@mui/material";

function Products() {

    const [prodList, setProdList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8765/medicine-service/medicine/allMedicines")
            .then((res) => {
                console.log(res.data.data);
                setProdList(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const getCard = (medicine) => {
        return (<>
            <div className="card ml-2" style={{
                width: " 18rem"
            }}>
                <div className="card-body">
                    <h5 className="card-title">{medicine.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Category: {medicine.targetAilment}</h6>
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

            <div className="medicine-list mt-5 pl-2" style={{ display: "flex" }}>
                {
                    prodList.map((prod) => getCard(prod))
                }
            </div>
        </>
    );
}

export default Products;