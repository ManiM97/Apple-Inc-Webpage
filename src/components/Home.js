import React from 'react';
import "./Home.css"

function Home() {
  return (
    // <div className='home-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 p-4'>
            <h1 className='about-us-heading'>About Us</h1>
            <div>
              <img alt='apple' src='https://cdn.pixabay.com/photo/2016/11/19/13/53/apple-1839363_1280.jpg' className='w-100' />
            </div>
          </div>
          <div className='col-12'>
            <div className='company-projects'>
              <h2 className='company-name'>Apple Inc.</h2>
              <div className='total-projects-container'>
                <p className='total-projects'>Mobile Models : 38</p>
              </div>
            </div>
          </div>
          <div className='col-12'>
          <div className='project-details-container'>
            <div>
              <p className='para'>Projects</p>
            </div>
            <div className='project-alignment'>
              <div className='ongoing-container d-flex flex-column justify-content-center align-items-center'>
                <h6 className='heading'>Ongoing </h6>
                <p>3</p>
              </div>
              <div className='completed-container d-flex flex-column justify-content-center align-items-center'>
                <h6 className='heading'>Completed</h6>
                <p>38</p>
              </div>
              <div className='upcoming-container d-flex flex-column justify-content-center align-items-center'>
                <h6 className='heading'>Upcoming</h6>
                <p>5</p>
              </div>
            </div>
          </div>
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