import './Login.css';
import React from "react";

function Logout(value) {
    return(
        <div>
           <button className='logout_button'
           onClick = {() => 
           {value.changeStatus(false);}
           }>Logout</button>
        </div>
    )
}

export default Logout;