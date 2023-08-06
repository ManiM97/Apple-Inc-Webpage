import React from 'react';
import "./Project.css"
import Mobile from './Mobile';

const Project = () => {
    return (
        <div className='project-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='project-heading'>Mobiles</h1>
                        <div>
                            <img alt='apple' src='https://cdn.pixabay.com/photo/2016/11/19/13/53/apple-1839363_1280.jpg' className='w-100 company-image' />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='company-project-page'>
                            <h2 className='company-name-two'>Apple Inc.</h2>
                            <div className='total-projects-container'>
                                <p className='total-projects'>Mobile Models : 38</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='project-details-container pl-5 pb-5 pr-5'>
                            <div>
                                <p className='para'>Projects</p>
                            </div>
                            <div className='project-alignment-page'>
                                <div className='ongoing-container-project d-flex flex-column justify-content-center align-items-center'>
                                    <h6 className='heading'>Ongoing </h6>
                                    <p className='count'>3</p>
                                </div>
                                <div className='completed-container-project d-flex flex-column justify-content-center align-items-center'>
                                    <h6 className='heading'>Completed</h6>
                                    <p className='count'>38</p>
                                </div>
                                <div className='upcoming-container-project d-flex flex-column justify-content-center align-items-center'>
                                    <h6 className='heading'>Upcoming</h6>
                                    <p className='count'>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <Mobile />
                </div>
            </div>
        </div>
    )
}

export default Project