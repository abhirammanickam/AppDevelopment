import Navbar from './Navbar';
import React from 'react'
import Footer from './Footer';
import '../Assets/Aboutus.css';
function Aboutus() {
  return (
  
    <div>
     <Navbar/>
      <div className='container'> 
      <p className='para mt-3' >About Us!</p>
      <p className="p1">Thankyou for taking the time to explore this page.</p>

      <p className="p1">Here at The Inventory Management, I aim to provide you with the confidence and inspiration to provide you a public inventory.</p>
      
      <p className="p1">On this page you will find fuss-free, easy to get the things you needed.</p>
      
      <p className="p1">In addition, there are over 100 inventory managements  on an extensive range of places.</p>
      
      <p className="p1"></p>
      
      <p className="p1"></p>
      
      <p className="p1"></p>
      
      <p className="p1"></p>
      
      <p className="p1">I hope that the website is useful to you</p>
      <p className='para'>Abhiram M,at out inventory management</p>
      
      </div>
      <div className='container'>
      <div className='row'>
         <div className='col-sm-4'>
           
         </div>
         <div className='col-sm-4'>
          
         </div>
         <div className='col-sm-4'>
          
         </div>
      </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Aboutus;