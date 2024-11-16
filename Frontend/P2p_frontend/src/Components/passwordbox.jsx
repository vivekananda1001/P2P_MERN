import "./passwordbox.css";
import { useState  } from "react"
import { useNavigate } from 'react-router-dom' 


function Pwdbox() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/reset");
    };

    return (
        <div className="pwdbox-container">
            <input type="text" placeholder="Password" id="Pwdbox" />
            <a href="#" className="forgot-password" onClick = { handleSignIn }>Forgot Password?</a>
        </div>
    );
}

export default Pwdbox;
