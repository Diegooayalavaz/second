import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";




const LogOutButton = () => {


    const { getLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    
    async function logout(){
        await axios.get("http://localhost:5005/auth/logout");
        await getLoggedIn();
        navigate("/");
    }

    return (<button onClick={logout}>Log out</button>);
}
 
export default LogOutButton;