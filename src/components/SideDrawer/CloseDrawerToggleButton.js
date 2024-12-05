import React from 'react';
import './CloseDrawerToggleButton.css'

const CloseDrawerToggle = props => (
    <button className="close-toggle-button" onClick={props.clickCloseDrawer} >
        <div className="close-toggle-button-line-1"></div>
        <div className="close-toggle-button-line-2"></div>
    </button>
)

export default CloseDrawerToggle