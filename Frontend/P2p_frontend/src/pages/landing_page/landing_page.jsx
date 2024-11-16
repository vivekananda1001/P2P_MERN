import "./landing_page.css"
import Header from "../../Components/Header"
import { useLocation } from "react-router-dom"

function LandingpageComponents(){
    const location = useLocation();
    const { username } = location.state || { username: "Guest" };
    return(
        <div id = "fullpage">
            <div id = "headersection"><Header/></div>
            <div id = "Title">
                Welcome {username} !
            </div>
            <div id = "landingcomponents">
                <UploadButton/>
                <DownloadButton/>
            </div>
        </div>
    )
}

function UploadButton(){
    return (
        <button id = "uploadbutton"> Upload a file </button>
    )
}

function DownloadButton(){
    return (
        <button id = "downloadbutton"> Download a file </button>
    )
}


export default LandingpageComponents;
