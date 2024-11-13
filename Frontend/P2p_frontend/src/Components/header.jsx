import "./header.css"
import { Link } from "react-router-dom";
import About from "../pages/about_page/about_page"
import logolight from "../assets/logo_dark_plain.png"

function Header(){
    return (
        <div id = "header">
            {/* <Link to="/about" element = {<About/>} className="header-link">About Us</Link> */}
            {/* <Link to="/download" className="header-link">Download</Link>
            <Link to="/support" className="header-link">Support</Link> */}
            <div>
                <img src = {logolight} id = "logo-light"/>
            </div>
            <div className="header-option">About Us</div>
            <div className="header-option">Download</div>
            <div className="header-option">Support</div>
        </div>
    )
}

export default Header