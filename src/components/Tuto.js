import React from "react";
function Tuto(props) {
    console.log(props)
    /**Pour accèder au propos il faut que le composent sa dans <Route/> */

    setTimeout(()=>{
        props.history.push('/')
    },5000)
    return ( 
    <div>

        <p>Oups la page est en construction , redirection dans 5sec</p>
        <h1>Mon tuto</h1>
    </div>
    );
}

export default Tuto;