import React from 'react';
import '../Assets/Footer.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div>
  
  <footer className='bg-dark text-white pt-5 pb-4'>
      <div className='container text-center text-md-left'>
          <div className='row text-center text-md-left'>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Inventory Management</h5>
                <p>Welcome to our inventory !</p>
                <p> 
                <a href="https://www.instagram.com/" style={{ marginLeft: "2%" }}>
                <i className="bx bxl-instagram"></i>
              </a>
              
              <a href="https://twitter.com" style={{ marginLeft: "2%" }}>
              <i className=" bx bxl-twitter"></i>
            </a>
                </p>
                <p className='text-primary'>Copyright @2023</p>
               
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Products</h5>
                <p> 
                  <a className='text-white' style={{textDecoration:"none"}}>workin progress inventory</a>
                </p>
                <p> 
                  <a className='text-white' style={{textDecoration:"none"}}>RawMaterial inventory</a>
                </p>
                <p> 
                  <a  className='text-white' style={{textDecoration:"none"}}>Finished inventory</a>
                </p>
              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Help</h5>
                <p> 
                  <Link to="/FAQ" id="link"><a className='text-white' style={{textDecoration:"none"}}> FAQ</a></Link>
                </p>
                <p> 
                  <Link to="/about" id='link'><a  className='text-white' style={{textDecoration:"none"}}>Aboutus  </a></Link>
                </p>
                <p> 
                  <Link to="/Privacyandsetting" id="link"><a className='text-white' style={{textDecoration:"none"}}> PrivacyandSetting</a></Link>
                </p>
                <p> 
                  <Link to="/feedback" id='link'><a  className='text-white' style={{textDecoration:"none"}}>FeedBack</a></Link>
                </p>
              </div>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <Link to="/contact" id="link"><h5 className='text-uppercase mb-4 font weight-bold text-warning'>Contact</h5></Link>
                <p>
                <i class='bx bxs-home-smile'></i> Coimbatore,India
                </p>
                <p>
                    <i class='bx bx-envelope'></i> 727821tuit003@skct.edu.in
                </p>
                <p>
                <i class='bx bx-phone'></i> +91 3453485343
                </p>
                <p>
                <i class='bx bx-printer' ></i>+01 238 238 23
                </p>
              </div>
             
          </div>
      </div>
    </footer>
   
   </div>
  
  )
}

export default Footer;