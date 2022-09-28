import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import axios from "axios";



const Customers = () => {

    const [customers, setCustomers] = useState([]);

    async function getCustomers() {
        const customersRes = await axios.get("http://localhost:5005/customer/");
        setCustomers(customersRes.data);
    }

    useEffect(() => {
        getCustomers()
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <div className="row">
                <div className="col col-12 col-md-6">
                    <CustomerForm getCustomers={getCustomers} />
                </div>
                <div className="col col-12 col-md-6">
                    <CustomerList customers={customers} />
                </div>
            </div>
        </div>
    );
}

export default Customers;