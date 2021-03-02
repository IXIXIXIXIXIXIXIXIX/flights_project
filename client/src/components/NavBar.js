import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar-container">

                     <i className="fas fa-arrow-down"></i>

                 <nav className="navbar-right-cluster">
                     <Link to="/search" className="navbar-link tooltip"><i className="fas fa-search"></i>
                            <span className="tooltiptext-left transparent-box">Search Flights</span>
                     </Link>

                  </nav>
        </nav>

   

    );
};

export default NavBar;