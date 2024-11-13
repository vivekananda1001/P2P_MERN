import "./login_page.css"
import Pwdbox from "../../Components/passwordbox"
import Unamebox from "../../Components/UserNamebox"
import Header from "../../Components/Header"
import logolight from "../../assets/logo_dark_plain.png"


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
    return (
        <div id="Loginpage">
            <div className="Loginbox">
                <Unamebox/ >
                <Pwdbox/ >
                <div id="button">
                    <button id = "Signinbutton">Sign in</button>
                </div>
                <div id = "create">
                    <br/>
                    Don't have an Account? 
                    <a href="#"><u>Create one</u></a> in just 3 steps!
                </div>
            </div>
        </div>
    )
}

export default Login