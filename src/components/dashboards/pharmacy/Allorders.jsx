import { useEffect, useState } from "react";
import axios from "axios";

function convertTimestamp(date) {
    return date.substring(0, 10);
}

function Allorders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const pharmaId = sessionStorage.getItem("pharmaId");
        axios.get(`http://localhost:8765/pharmacy-service/pharmacy/allOrders/${pharmaId}`)
            .then((res) => {
                setOrders(res.data.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Placed On</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return (
                                <tr>
                                    <th scope="row">{order.orderId}</th>
                                    <td>{order.medicineName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{convertTimestamp(order.dateOfOrder)}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Allorders;