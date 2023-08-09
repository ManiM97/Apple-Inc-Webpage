import React from 'react';
import Banner from './Banner';
import "./Home.css"

function Home() {
  return (
    // <div className='home-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
          <h1 className='about-us-heading'>About Us</h1>
          </div>
          <div className='col-12'>
            <Banner/>
            </div>
          <div className='col-12'>
            <p className='description-para'>Apple Inc., a trailblazing technology company, has established itself as a global leader in innovation with its iconic product line, the iPhone. Since its inception in 2007, the iPhone has revolutionized the way we communicate, work, and entertain ourselves. Combining sleek design, cutting-edge hardware, and an intuitive user interface, each iteration of the iPhone pushes the boundaries of what is possible in mobile technology.</p>
            <p className='description-para'>The company's unwavering commitment to excellence is evident in its seamless integration of hardware, software, and services, providing users with a seamless and cohesive experience. With a fervent dedication to privacy and security, Apple has garnered a loyal and expansive customer base, solidifying its position as an industry trendsetter and a symbol of innovation.</p>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Home