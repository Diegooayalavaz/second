import axios from "axios";
import React, { useState } from "react";


const CustomerForm = ({ getCustomers }) => {

    const [customerTitle, setCustomerTitle] = useState("");
    const [customerDescription, setCustomerDescription] = useState("");
    const [customerImageUrl, setCustomerImageUrl] = useState("");


    async function saveCustomer(event) {
        event.preventDefault();
        try {

            const customerData = {
                title: customerTitle,
                description: customerDescription,
                imageUrl: customerImageUrl,
            }

            await axios.post("http://localhost:5005/customer/", customerData);
            getCustomers();

        } catch (error) {
            console.error(error);
        }

    }


    return (<div className="m-4">
        <form onSubmit={saveCustomer}>
            <div className="form-group m-2">
                <label htmlFor="">Title:</label>
                <input type="text" className="form-control" name="title" onChange={(event) => { setCustomerTitle(event.target.value); }} />
            </div>
            <div className="form-group m-2">
                <label htmlFor="">Description:</label>
                <input type="text" className="form-control" name="description" onChange={(event) => { setCustomerDescription(event.target.value); }} />
            </div>
            <div className="form-group m-2">
                <label htmlFor="">imageUrl:</label>
                <input type="text" className="form-control" name="imageUrl" onChange={(event) => { setCustomerImageUrl(event.target.value); }} />
            </div>
            <br />
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>);
}

export default CustomerForm;