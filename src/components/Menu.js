import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Menu() {
    /**Link :permet de ne pas recharger la page (appel serveur) lors du changement de pade */
    /*<a className="nav-link active" href="/">Doc</a>*/ 
    /** Navlink: permet add la class active->nav-link active */
    return (
    <nav>

        <ul className="nav">
            <li className="nav-item">
                
                <Link className="nav-link" to="/">Doc</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tuto">Tuto</Link>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/community">Communauter</NavLink>
            </li>
         
        </ul>
    </nav>
    );
}

export default Menu;