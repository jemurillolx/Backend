import React from 'react';
import './SideDrawer.css'
import {NavLink} from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses} >
            <ul>
                <li>
                    <NavLink to ='/Atletes'>Atletes</NavLink>
                </li>
                <li>
                    <NavLink to ='/Author' activeClassName="active">Author</NavLink>
                </li>

            </ul>
        </nav>
        )
}

export default sideDrawer;