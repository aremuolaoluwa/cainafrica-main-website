import React from 'react';
import  { Link } from "react-router-dom";
import styled from 'styled-components';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton.js';
import './Toolbar.css';
import CainWhiteLogo from '../../images/CainWhiteLogo.png';

const Logo = styled.img`
    width: 12rem;
    margin: 0 5rem 0 1rem;
    
    //border: 1px solid white;
        @media (max-width: 768px) {
            width: 6rem;
            padding-left: 0.25rem;
            padding-top: 1rem;
            // width: 10rem;
        }
`


const toolbar = props => {

return (    
    
    <header className="toolbar">
        <nav className="toolbar-navigation">            
            <div className="toolbar-logo">
                <Link to="/"> <Logo src={CainWhiteLogo}/> </Link>
            </div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <Link to="/home">Home</Link>
                <Link to="/who-we-are">About Us</Link>
                <Link to="/projects">Projects</Link>
                <span className="dropdown">
                    <span className="dropbtn">Resources</span>
                    <span className="dropdown-content">
                        <Link to="/gallery" className="dropDownNavLink" >Gallery</Link>
                    </span>
                </span>
                {/* <Link to="/partners-sponsors">Partners & Sponsors</Link> */}
                <span className="dropdown">
                    <span className="dropbtn">Team</span>
                    <span className="dropdown-content">
                        <Link to="executiveboard" className="dropDownNavLink" >Board of Trustees</Link>
                        <Link to="ourmembers" className="dropDownNavLink" >Management Staff</Link>
                        <Link to="edustaff" className="dropDownNavLink" >Educational Staff</Link>
                        <Link to="supportstaff" className="dropDownNavLink" >Support Staff</Link>
                        <Link to="beavolunteer" className="dropDownNavLink" >Volunteer with Us</Link>
                    </span>
                </span>
                {/* <Link to="/blog">Blog</Link> */}
                {/* <Link to="/gallery">Gallery</Link> */}
                <Link to="/donate">
                    <button className="donateButton">
                        Donate
                    </button>
                </Link>
            </div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
)
}
export default toolbar;
