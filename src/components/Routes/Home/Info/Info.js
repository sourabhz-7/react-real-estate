import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Info.css';

class Info extends Component {
  render() {
    return (
      <section className="company-intro center section" id="company-intro">
          <div className="container">
            <div className="row">
            <h4>CAYAN GROUP</h4>
            <p>Since it was founded in 2014, CAYAN GROUP philosophy is a commitment to professionalism, integrity and credibility, creative and forward thinking real estate company in Turkey. We have artfully united extraordinary homes with extraordinary lives and
              gave our customers the fruit of our long experience in real estate industry.</p>
            <div className="container">
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="company-info-icons col s6 l3">
                    <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521833331/home-page-info/_hp-real-estate-investment.jpg" alt="" />
                    <br />
                    <h5>Real Estate Investment</h5>
                  </div>
                  <div className="company-info-icons col s6 l3">
                    <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521833311/home-page-info/_hp-real-estate-managment.jpg" alt="" />
                    <br/>
                    <h5>Real Estate Management</h5>
                  </div>
                  <div className="company-info-icons col s6 l3">
                    <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521833356/home-page-info/_hp-company-establishment.jpg" alt="" />
                    <br />
                    <h5>Company Establishment</h5>
                  </div>

                  <div className="company-info-icons col s6 l3">
                    <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521833281/home-page-info/_hp-airport-pickups-80.jpg" alt="" />
                    <br />
                    <h5>Airport Pickups</h5>
                  </div>

                </div>
              </div>

            </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Info;
