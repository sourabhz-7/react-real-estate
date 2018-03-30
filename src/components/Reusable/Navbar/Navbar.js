import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  // burgerToggle(){
  //   return (
  //       var elem = document.querySelector('.sidenav');
  //       var instance = M.Sidenav.init(elem, options);
  //
  //   );
  // }
  render() {
    return (
      <div>
        <i onClick={ this.showSettings } className="material-icons sidenav-trigger right">menu</i>
        <Menu >
          <img className="sidenav-logo" src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522222933/other/home-page-logo.png"/>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="projects" className="menu-item" href="/projects">Projects</a>
          <a id="services" className="menu-item" href="/services">Services</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>

        </Menu>
        <div className="navbar-fixed">
          <nav className="normal-nav">
            <div className="nav-wrapper">
              <a href="index.html" className="brand-logo"><img className="responsive-img" src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522221061/other/logo-nav.png"/></a>

              <ul className="nav-links center hide-on-med-and-down">
                <li><a href="/">HOME</a></li>
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>
              <ul className="right hide-on-med-and-down language">
                <li className="dropdown-button right" href="#dropdown1" data-activates="dropdown1"><a className="language-a">عربي</a></li>
                <li className="right">
                  <p>CALL US: +905061162526</p>
                </li>
              </ul>

            </div>

          </nav>
        </div>

      </div>
    );
  }

}

export default Navbar;
