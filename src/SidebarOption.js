import React from 'react'
import './SidebarOption.css'

export default function SidebarOption({title, Icon}) {
    return (
        <div className="sidebar__option">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? <h4>{title}</h4>: <p>{title}</p>}
        </div>
    )
}
