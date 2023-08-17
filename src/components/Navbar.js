import { Link } from "react-router-dom";

function Navbar(props){
    console.log(props);
    return <div style={{padding:"20px", border:"1px solid #ccc", backgroundColor: "#f7f7f7"}}>
        <ul id="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>{(props.isLogin)?"Kiran, Logout":"Login"}</li>
        </ul>
    </div>

    
}

export default Navbar;