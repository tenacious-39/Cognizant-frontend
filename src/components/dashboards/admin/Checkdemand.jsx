import { useEffect, useState } from "react";
import axios from "axios";

function Checkdemand() {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8765/pharmacy-service/pharmacy/allOrders")
            .then((res) => {
                if (res.data.success === true) {
                    setOrders(res.data.data);
                    // console.log(res.data.data);
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Ordered on</th>
                        <th scope="col">Pharmacy Name</th>
                        <th scope="col">Pharmacy Location</th>
                        <th scope="col">Pharmacy Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return (
                                <tr>
                                    <td>{order.orderId}</td>
                                    <td>{order.medicineName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.dateOfOrder.substring(0, 10)}</td>
                                    <td>{order.pharmacyName}</td>
                                    <td>{order.pharmacyLocation}</td>
                                    <td>{order.pharmacyEmail}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Checkdemand;