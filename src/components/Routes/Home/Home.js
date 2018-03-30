import React, { Component } from 'react';
import './Home.css';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Footer from '../../Reusable/Footer/Footer.js';
import Action from '../../Reusable/Action/Action.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Header from './Header/Header.js';
import Info from './Info/Info.js';
import Whyus from './Whyus/Whyus.js';
import Testimonial from './Testimonial/Testimonial.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Action />
        <Navbar />
        <Header />
        <Info />
        <ProjectsCarousel />
        <Whyus />
        <Testimonial />
        <Getintouch />

        <Footer />
      </div>
    );
  }
}

export default Home;
