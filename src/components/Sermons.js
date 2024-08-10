import React, { useRef } from 'react';
import './Sermons.css';

const Sermons = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
  };

  return (
    <section className="sermons">
      <h2>Recent Sermons</h2>
      <div className="sermon-cards-wrapper">
        <button className="scroll-arrow left" onClick={scrollLeft}>&#8249;</button>
        <div className="sermon-cards" ref={scrollRef}>
          <div className="sermon-card">
            <iframe width="300" height="215" src="https://www.youtube.com/embed/zDXXjY12TMQ?si=Ec71ojeh9SrwgPdp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p>Compelled By Christ's Love</p>
          </div>
          <div className="sermon-card">
            <iframe width="300" height="215" src="https://www.youtube.com/embed/ciX7sh7BVjM?si=ERa90V1YcXG-oEFj" title="Bring Your Problems to Jesus" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p>Bring Your Problems to Jesus</p>
          </div>
          <div className="sermon-card">
            <iframe width="300" height="215" src="https://www.youtube.com/embed/AyGNdFL_6bM?si=ocCUNG3YcT4FN3V2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p>Be Humble</p>
          </div>
          <div className="sermon-card">
            <iframe width="300" height="215" src="https://www.youtube.com/embed/CfBXH80U3OQ?si=J22bqPaquQR3XsMQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p>Overcoming Negative Thoughts</p>
          </div>
          {/* Add more sermon cards as needed */}
        </div>
        <button className="scroll-arrow right" onClick={scrollRight}>&#8250;</button>
      </div>
    </section>
  );
};

export default Sermons;
