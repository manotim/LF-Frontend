import React from 'react';
import Footer from './footer';


function Home() {
  return (
    <div>
      <h1 className='animated-heading'>Welcome!</h1>
      <div className="homepage-container">
        <div className="homepage-image"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
