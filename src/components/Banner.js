import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-12 p-4'>
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
        </div>
    </div>
  )
}

export default Banner;