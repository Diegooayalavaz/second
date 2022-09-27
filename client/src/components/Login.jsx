import React, { useState } from "react";
import axios from "axios";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email, password
            };

            await axios.post("http://localhost:5005/auth/login/", loginData, {
                withCredentials: true
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container mt-2">
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="" >Email:</label>
                    <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

                <button className="btn btn-primary mt-2" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
