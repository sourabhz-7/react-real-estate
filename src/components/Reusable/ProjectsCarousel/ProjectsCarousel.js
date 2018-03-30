import React, { Component } from 'react';
import Slider from 'react-slick';

import PRODUCTS from '../../Data/CarouselData.js';

import './ProjectsCarousel.css';


class ProjectsCarousel extends Component {

  render() {
              var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive:[
                  { breakpoint: 400, settings: { slidesToShow: 1 } }
                ]
        };
    return (
      <div className="projetcsCarousel ">
              <div className="container">
                <div className="row">
                <h1 className="body-h1">PROJECTS</h1>
                <Slider className="inner" {...settings}>
                {PRODUCTS.map((product)=>{
                  return (
                    <div className='wrapper '>
                      <div className={'carouselImages cayan-'+product.id}>
                        <h6>{'CAYAN'+product.id}</h6>
                      </div>
                      <div className="description">
                        <h6>Description</h6>
                        <h5>{product.priceMin + ' - ' + product.priceMax}</h5>
                        <p>{product.description}</p>
                      </div>
                      <div className="project-info ">
                        <div className="col s6 project-info-icons left">
                          <i className="ion-ios-location-outline "></i>
                          <p>{product.location}</p>
                          <br/>
                          <i className="ion-ios-home-outline"></i>
                          <p>{product.types}</p>
                          <br/>
                          <i className="ion-ios-photos-outline"></i>
                          <p>{product.area}</p>
                          <br/>
                        </div>
                        <div className="col s6 project-info-icons right">
                          <i className="ion-ios-pricetag-outline "></i>
                          <p>{product.installment} months installments</p>
                          <br/>
                          <i className="ion-ios-gear-outline"></i>
                          <p>{product.status}</p>
                          <br/>
                          <i className="ion-ios-cart-outline"></i>
                          <p>{product.deliveryDate}</p>
                          <br/>
                        </div>
                        <button className="more-details">MORE DETAILS</button>
                      </div>
                    </div>
                  )
                })}
                </Slider>
              </div>
            </div>
      </div>
    );
  }

}


export default ProjectsCarousel;
