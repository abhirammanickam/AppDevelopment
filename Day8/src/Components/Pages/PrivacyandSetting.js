import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/PrivacyandSetting.css'; 

// Rest of your code

function PrivacyandSetting() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h2 className='privacy-settings-title mt-3'>Privacy and Settings</h2>
        
        {/* Privacy Section */}
        <div className='privacy-section'>
          <h3 className='section-title'>Privacy Settings</h3>
          {/* Privacy content goes here */}
        </div>
        
        {/* Settings Section */}
        <div className='settings-section'>
          <h3 className='section-title'>Account Settings</h3>
          {/* Settings content goes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyandSetting;
