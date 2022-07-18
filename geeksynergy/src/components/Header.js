import {Link, useNavigate} from "react-router-dom"
import './Header.css';
import { useContext } from "react";
import {AuthContext} from './AuthProvider'

const Header=()=>{
    const {setLogin } = useContext(AuthContext);
    const nav = useNavigate();
    

    const LogoutHandler=()=>{
        setLogin(false);
        nav("../");
    }

    
    return(

        <header className="headerdiv">
            <Link to="/companyinfo"><button className='btn'>Company Info</button></Link>
            <h1>Movie App</h1>
            <button onClick={LogoutHandler} className='btn' >Logout</button>
        </header>
    )
}

export default Header;