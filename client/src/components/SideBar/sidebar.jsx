import React from "react"
import "./sidebar.css"
import {Menu, Close} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { SidebarItems } from "./sidebarItems"



import { useState } from "react"



export default function Sidebar(){
    const [sidebar , setSidebar] = useState(false);

    const hideSidebar = ()=> setSidebar(!sidebar);
    return (
        <>
            <div className="sidebar">
                <Link to={'#'} className="menu-bars">
                    <Menu  className="menu-bars-Icon" onClick={hideSidebar}/>    
                </Link>
            </div>         
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={hideSidebar}> 
                        <li className="navbar-toggle">
                            <Link to={'#'} className="menu-bars">
                                <Close />
                            </Link>
                        </li>
                        {SidebarItems.map((item,index)=>{
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            
        </>
    )
}