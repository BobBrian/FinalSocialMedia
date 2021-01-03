import React from 'react'
import "./HeaderOptions.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({avatar, Icon, title}) {
    return (
        <div className="headerOption">
            {Icon &&<Icon className="headerOption_icon"/>}
            {avatar && (<Avatar className="headerOption_Icon" src={avatar}/> )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
