import "./passwordbox.css";

function Pwdbox() {
    return (
        <div className="pwdbox-container">
            <input type="text" placeholder="Password" id="Pwdbox" />
            <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
    );
}

export default Pwdbox;
