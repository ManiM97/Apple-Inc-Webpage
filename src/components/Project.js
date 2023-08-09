import React from 'react';
import Banner from "./Banner";
import "./Project.css"
import Mobile from './Mobile';

const Project = () => {
    return (
        <div className='project-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <h1 className='about-us-heading'>Mobiles</h1>
                    </div>
                    <div className='col-12'>
                        <Banner/>
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