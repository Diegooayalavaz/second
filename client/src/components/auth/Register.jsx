import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const {getLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                email, password, passwordVerify
            };

            await axios.post("http://localhost:5005/auth/", registerData, {
                withCredentials: true
            });
            await getLoggedIn();
            navigate("/");


        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container mt-2">
            <h1>Register a new account</h1>
            <form onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="" >Email:</label>
                    <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Repeat password:</label>
                    <input type="password" name="passwordVerify" className="form-control" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
                </div>
                <button className="btn btn-primary mt-2" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
