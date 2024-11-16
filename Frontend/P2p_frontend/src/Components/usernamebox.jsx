import "./usernamebox.css"

function Unamebox({value, onChange }){
    return(
        <div>
            <input 
            type="text" 
            placeholder="Username "
            id = "Unamebox"
            value = {value}
            onChange = {onChange}
            />
        </div>
    )
}

export default Unamebox