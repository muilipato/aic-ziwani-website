import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services">
    <h2>Order of Services</h2>
    <ul>
      <li>1st Service: 8am - 10am (Kiswahili)</li>
      <li>2nd Service: 10am - 12 noon (English)</li>
      <li>3rd Service: 12 noon - 2pm (Kiswahili)</li>
    </ul>
    <button onClick={() => window.location.href='https://youtube.com/your-channel'}>
      Watch Online
    </button>
  </section>
);

export default Services;
