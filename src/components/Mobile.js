import React, { useState, useEffect } from 'react';
import mobilesData from '../products.json'; // Adjust the path accordingly
import "./Mobile.css"

function Mobile() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    setMobiles(mobilesData.iphones);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Product List</h1>
        </div>
        <div className='movie-list'>
          <ul>
            {mobiles.map((mobile, index) => (
              <li style={{ listStyleType: 'none' }} key={index}>
                <div className='product-container shadow'>
                  <div>
                    <img src={mobile.image} alt={mobile.type} className='product-image' />
                  </div>
                  <div className='p-4'>
                    <h2>{mobile.type}</h2>
                    <p><strong>Price:</strong> {mobile.price}</p>
                    <div className="_3LWZlK d-flex flex-row justify-content-start">
                      {mobile.ratings} &nbsp;
                      <img alt='rating' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="_1wB99o" />
                    </div>
                    <h3>Specifications:</h3>
                    <ul>
                      <li><strong>Display:</strong> {mobile.specifications.display}</li>
                      <li><strong>Processor:</strong> {mobile.specifications.processor}</li>
                      <li><strong>Storage:</strong> {mobile.specifications.storage}</li>
                      <li><strong>Camera:</strong> {mobile.specifications.camera}</li>
                      <li><strong>OS:</strong> {mobile.specifications.os}</li>
                    </ul>
                    <p><strong>Description:</strong> {mobile.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
