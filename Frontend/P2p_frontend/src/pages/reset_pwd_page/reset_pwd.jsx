import "./reset_pwd.css"
import Pwdbox from "../../Components/passwordbox"
import Unamebox from "../../Components/UserNamebox"
import Header from "../../Components/Header"
import logolight from "../../assets/logo_dark_plain.png"
import { useNavigate } from 'react-router-dom' 
import { useState  } from "react"

function ResetPasswordPage(){
    return(
        <div id = "fullpage">
            <div id = "headersection"><Header/></div>
            <div id = "Title">We're here to help!</div>
            <Resetbox/>
        </div>
    )
}

function Resetbox(){
    const navigate = useNavigate();
    const [ username, setusername ] = useState("");

    const handleSignIn = () => {
        if (username) {
            navigate("/", { state: { username } }); // Pass username as state
        } else {
            alert("Please enter a username"); // Basic validation
        }
    };


    return (
        <div id="Loginpage">
            <div className="Loginbox">
                <Unamebox onChange = {(e)=>setusername(e.target.value)} />
                <div id="button">
                    <button id = "Sendpwdbutton" onClick={handleSignIn}>Send OTP</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage