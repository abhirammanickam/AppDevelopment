import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Navbar.css';
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white">
        <div className="container-fluid">
      

        
          <a className="navbar-brand text-dark" id="garden"><i class='' ></i>IMP</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3" >
              <Link to="/home" id='link'><a className="nav-link text-dark" id="nav">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" id='link'><a className="nav-link text-dark" id="nav">About Us</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" id='link'><a className="nav-link text-dark" id="nav">Contact</a></Link>
            </li>
            <li className="nav-item">
             
              <Link to="/login"><button type='button' className="btn btn-outline-dark" ><i class='bx bx-user'></i> Login</button></Link>
            </li>
            <li className="nav-item">
             <Link to="/signup"><button type='button' className="btn btn-outline-dark" >Sign In</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
