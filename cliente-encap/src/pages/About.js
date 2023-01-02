import React from "react";
import IconArrow from "./IconArrow";
import {Link } from "react-router-dom";
import '.././css/About.css'

const IconArrow = () => {

    return (
        <div className="aboutReturn">
            <Link to="/Inicio" className="return">
               
            </Link>
        </div>
    )


}

export default IconArrow;