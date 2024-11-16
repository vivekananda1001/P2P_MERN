import "./login_page.css"
import Pwdbox from "../../Components/passwordbox"
import Unamebox from "../../Components/UserNamebox"
import Header from "../../Components/Header"
import logolight from "../../assets/logo_dark_plain.png"
import { useNavigate } from 'react-router-dom' 
import { useState  } from "react"

function Login(){
    return(
        <div id = "fullpage">
            <div id = "headersection"><Header/></div>
            <div id = "Title">
                <img src = {logolight} id = "logo"/>
                Discover, Download, Share.
            </div>
            <Loginbox/>
        </div>
    )
}

function Loginbox(){
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
                <Pwdbox/ >
                <div id="button">
                    <button id = "Signinbutton" onClick={handleSignIn}>Sign in</button>
                </div>
                <div id = "create">
                    <br/>
                    Don't have an Account? 
                    <a href="#"><u> Create one </u></a> in just 3 steps!
                </div>
            </div>
        </div>
    )
}

export default Login