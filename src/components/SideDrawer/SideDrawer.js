import React from "react";
import { Link } from "react-router-dom";
import CloseDrawerToggle from "./CloseDrawerToggleButton";
import "./SideDrawer.css";

const sideDrawer = (props) => (
  <>
    <nav className="side-drawer">
      <CloseDrawerToggle clickCloseDrawer={props.closeDrawer} />
      <ul>
        <li>
          <Link onClick={props.closeDrawer} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.closeDrawer} to="/who-we-are">
            About Us
          </Link>
        </li>
        <li>
          <Link onClick={props.closeDrawer} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/partners-sponsors">Partners & Sponsors</Link>
        </li>
        <span>
          <span>
            <li>
              <Link onClick={props.closeDrawer} to="executiveboard">
                Executive Board
              </Link>
            </li>
            <li>
              <Link onClick={props.closeDrawer} to="ourmembers">
                Management Staff
              </Link>
            </li>
            <li>
              <Link onClick={props.closeDrawer} to="edustaff">
                Educational Staff
              </Link>
            </li>
            <li>
              <Link onClick={props.closeDrawer} to="supportstaff">
                Support Staff
              </Link>
            </li>
            <li>
              <Link onClick={props.closeDrawer} to="beavolunteer">
                Join Our Team
              </Link>
            </li>
          </span>
        </span>
        {/* <li>
                    <Link onClick={props.closeDrawer} to="/blog">Blog</Link>
                </li> */}
        <li>
          <Link onClick={props.closeDrawer} to="/gallery">
            Gallery
          </Link>
        </li>

        <li>
          <Link onClick={props.closeDrawer} to="/donate">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default sideDrawer;
