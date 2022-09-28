
import './App.css';
import NavBar from "./components/NavBar";
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
import Router from './Router'; 
axios.defaults.withCredentials = true;

function App() {



  return (
    <AuthContextProvider>
      <NavBar />
      <Router />
    </AuthContextProvider>
  );
}

export default App;
