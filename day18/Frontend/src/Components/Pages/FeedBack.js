import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/FeedBack.css';

function Feedback() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h2 className='feedback-title mt-3'>Give Us Your Feedback</h2>
        <div className='feedback-container'>
          <form className='feedback-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={feedback.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={feedback.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={feedback.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='submit-button'>
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
