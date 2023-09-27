import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/FAQ.css'; 

function FAQ() {
  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team by emailing support@example.com.',
    },
    
  ];

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h2 className='faq-title mt-3'>Frequently Asked Questions</h2>
        <div className='faq-container'>
          {faqData.map((faq, index) => (
            <div className='faq-item' key={index}>
              <div className='question'>{faq.question}</div>
              <div className='answer'>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
