import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521832676/nav/home-page-logo.png" />
                <ul className="footer-nav">
                  <li><a href="#">HOME</a></li>
                  <li className="active" ><a  href="#">PROJECTS</a></li>
                  <li><a href="#">SERVICES</a></li>
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">CONACT</a></li>
                </ul>

                <ul className="footer-social">
                  <a className="bg-facebook" href="https://www.facebook.com/CayanGroup.tr/"></a>
                  <a className="bg-twitter" href="https://twitter.com/CayanGroup_tr"></a>
                  <a className="bg-youtube" href="https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1"></a>
                  <a className="bg-linkedin" href="https://www.linkedin.com/in/cayan-group-490441113/"></a>
                  <a className="bg-instagram" href="https://www.instagram.com/cayangroup_tr/"></a>
                </ul>
                <p>&copy; Cayan Group Real Estate</p>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
