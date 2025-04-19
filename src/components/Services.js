import React from 'react'
import Loader from '../Contents/Loader';

const Services = () => {
  return (
    <>
    <Loader/>
    <div className="services">
      <div className="ser-container">
        <div className="ser-contain-card">
          <div className="ser-img-overlay">
            <div className="ser-img">
              <i className="bx bxs-info-circle"></i>
            </div>
          </div>
          <h4 className="title-ser">Data Managements</h4>
          <p className="text-ser">Managing finances, bookkeeping, tax returns, and ensuring compliance efficiently.</p>
        </div>
        <div className="ser-contain-card">
          <div className="ser-img-overlay">
            <div className="ser-img">
              <i className="bx bxs-info-circle"></i>
            </div>
          </div>
          <h4 className="title-ser">Frontend Services</h4>
          <p className="text-ser">Designing responsive, user-friendly websites using modern web technologies.</p>
        </div>
        <div className="ser-contain-card">
          <div className="ser-img-overlay">
            <div className="ser-img">
              <i className="bx bxs-info-circle"></i>
            </div>
          </div>
          <h4 className="title-ser">Backend Services</h4>
          <p className="text-ser">Developing scalable, secure server-side applications with APIs and databases.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services;
