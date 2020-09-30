/* eslint-disable */
import React, { Component } from 'react';

import Header from '../Landing_Page/Header';
import Testimonials from '../Landing_Page/Testimonials';
import Footer from '../Landing_Page/Footer';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Landing-Container">
        <Header />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default Landing;
