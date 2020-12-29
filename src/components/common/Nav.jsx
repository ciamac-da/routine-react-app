import React from 'react';
import {Link, withRouter, NavLink} from "react-router-dom";

export default withRouter(function Nav(props) {
    console.log(props)
    return (
        <div className="m-3">
            <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <NavLink to="/"
                // className={props.location.pathname === "/" ? "nav-link active" : "nav-link"}  <== I can use NavLink instead of this line and Nav tag!
                className="nav-link"
                exact
                activeClassName= "active"
                activeStyle={{backgroundColor:"green"}}
                 >
                Routine Todos
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/about" 
                // className={props.location.pathname === "/about" ? "nav-link active" : "nav-link"}   <== I can use NavLink instead of this line and Nav link!
                className="nav-link"
                activeStyle={{backgroundColor:"green"}}
                >
                About
                </NavLink>
                </li>
            </ul>
        </div>
    )
}
)