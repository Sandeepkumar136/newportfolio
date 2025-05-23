import React from 'react'
import FormServices from '../Contents/FormServices';
import services from '../Json/Services';

const Services = () => {
  return (
    <div>
      <div className="services-container">
        {
          services.map((e, i)=>(
            <div key={i} className="services-contain">
              <div className="serivces-heading-contain">
                <i className={e.icon}></i>
                <h3 className="heading-services">
                  {e.name}
                </h3>
              </div>
              <p className="text-services">
                {e.alt}
              </p>
            </div>
          ))
        }
      </div>
        <FormServices/>
    </div>
  )
}

export default Services; 