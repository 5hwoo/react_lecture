import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const defaultLinkstyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black',
}

const activeLinkStyle = {
    color: 'skyblue',
}

function HeaderTabs (props) {
    return (
        <div>
            <NavLink 
            exact
            to='/'
            style={defaultLinkstyle}
            activeStyle={activeLinkStyle}
            >
            Main
            </NavLink>
            <NavLink 
            exact
            to='/1'
            style={defaultLinkstyle}
            activeStyle={activeLinkStyle}
            >
            1
            </NavLink>
            <NavLink 
            exact
            to='/2'
            style={defaultLinkstyle}
            activeStyle={activeLinkStyle}
            >
            2
            </NavLink>
            <NavLink 
            exact
            to='/3'
            style={defaultLinkstyle}
            activeStyle={activeLinkStyle}
            >
            3
            </NavLink>

        </div>
    );   
}

export default HeaderTabs;