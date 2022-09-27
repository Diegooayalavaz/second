
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Customers from "./components/Customers";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext';
import { useContext } from 'react';

axios.defaults.withCredentials = true;

function App() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </AuthContextProvider>
  );
}

export default App;
