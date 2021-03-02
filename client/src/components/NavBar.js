import React from "react";

const NavBar = () => {

    function refresh(){
        window.location.reload("Refresh")
    }

    return (
        <nav className="navbar-container">

                     <i className="fas fa-arrow-down"></i>

                 <nav className="navbar-right-cluster">
                     <span className="navbar-link tooltip"><i className="fas fa-search"></i>
                            <span className="tooltiptext-left transparent-box">New Search</span>
                     </span>
                     <span className="navbar-link tooltip" onClick={() => {refresh()}}><i className="fas fa-sync"></i>
                            <span className="tooltiptext-left transparent-box">Reset All</span>
                     </span>

                  </nav>
        </nav>

   

    );
};

export default NavBar;