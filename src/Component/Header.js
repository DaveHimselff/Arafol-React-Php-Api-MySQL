import React from "react";
import { NavLink } from "react-router-dom";

const headerstylecon = {
  

}

const headerStyle = {
  backgroundColor: "#563d7c"
  
};


function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg" style={headerStyle}> 
        <div className="container">
          
                <NavLink
                  to="/"
                  className="nav-link nav-bar-link"
                  activeClassName="active"
                  style={({isActive,})=>{return {color: isActive?'#FFFFFF': ''}}} 
                >
                 Home
                </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/userlist"
                  className="nav-link nav-bar-link"
                  activeClassName="active"
                  style={({isActive,})=>{return {color: isActive?'#FFFFFF': ''}}} 
                >
                  User List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/adduser"
                  style={({isActive,})=>{return {color: isActive?'#FFFFFF': ''}}} 
                  className="nav-link nav-bar-link"
                  activeClassName="active"
                >
                  Add User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
