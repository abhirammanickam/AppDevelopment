import React from 'react';
import '../Assets/Navbar.css';
import Sidebar from './Sidebar';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { logout,selectUser } from '../Redux/userSlice';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';


function Navbar() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const email = user.email ;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  
  };
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
             
              
            </li>
            <li className="nav-item">
             <Link to="/signup"><button type='button' className="btn btn-outline-dark" >Sign In</button></Link>
            </li>
            <li>
        <div className="actions">
        {email ? (
          <>
          <p> 
          
          <Link onClick={handleLogout}>
          Logout
          </Link>&nbsp;&nbsp;
          Hello, {email}

            
            </p>
          </>
        ) : (
          <>
            <Link to="/login">
                Login

            </Link>
          </>
        )}
      </div>
        </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
