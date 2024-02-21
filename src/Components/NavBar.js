import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <a href="/employee">Employee Information</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;