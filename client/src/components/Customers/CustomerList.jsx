
import React from "react";


const CustomerList = ({ customers }) => {

    function renderCustomerList() {

        return customers.map((customer, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.title}</td>
                <td>{customer.description}</td>
                <td><img height="50" src={customer.imageUrl} /></td>
            </tr>
        });
    }

    return (<div className="table-responsive m-4">
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {renderCustomerList()}
            </tbody>
        </table>
    </div>);
}

export default CustomerList;