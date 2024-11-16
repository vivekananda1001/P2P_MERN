import './App.css'
import LoginPage from "./pages/login_page/login_page"
import LandingPage from "./pages/landing_page/landing_page"
import ResetPwdPage from "./pages/reset_pwd_page/reset_pwd"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/signin" element = {<div className = "Overall"><LoginPage/></div>}/>
        <Route path = "/" element = {<div className = "Overall"><LandingPage/></div>}/>
        <Route path = "/reset" element = {<div className = "Overall"><ResetPwdPage/></div>}/>
      </Routes>
    </Router>
  )
}

export default App
