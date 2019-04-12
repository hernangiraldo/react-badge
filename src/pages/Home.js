import React, { Component } from "react";
import { Link } from 'react-router-dom';

import eventLogo from '../images/badge-header.svg';
import logo from '../images/logo.svg';

import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <div className="Home__grid">
          <div>
            <img src={eventLogo} alt=""/>
            <h1 className="Home__label">Badge <br/> Management <br/> System </h1>\
            <Link to="/badges" className="btn btn-primary">Start</Link>
          </div>
        </div>
        <img className="Home__logo" src={logo} alt=""/>
      </section>
    )
  }
}

export default Home;
