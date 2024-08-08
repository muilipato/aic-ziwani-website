import React from 'react';
import './Sermons.css';

const Sermons = () => (
  <section className="sermons">
    <h2>Recent Sermons</h2>
    <div className="sermon-cards">
      {/* Replace with actual sermon data */}
      <div className="sermon-card">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zDXXjY12TMQ?si=Ec71ojeh9SrwgPdp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Compelled By Christ's Love</p>
      </div>
      <div className="sermon-card">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ciX7sh7BVjM?si=ERa90V1YcXG-oEFj" title="Bring Your Problems to Jesus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Bring Your Problems to Jesus</p>
      </div>
      <div className='sermon-card'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AyGNdFL_6bM?si=ocCUNG3YcT4FN3V2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Be Humble</p>
      </div>
      <div className='sermon-card'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CfBXH80U3OQ?si=J22bqPaquQR3XsMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      <p>Be Humble</p>
      <p>Overcoming Negative thoughts</p>
      </div>
      {/* Add more sermon cards as needed */}
    </div>
  </section>
);

export default Sermons;
