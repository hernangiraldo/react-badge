import React, { Component } from 'react';

import header from '../images/badge-header.svg'

import './styles/BadgeNew.css';

import Badge from '../components/Badge';
import BadgeFrom from '../components/BadgeForm';

class BadgeNew extends Component {

  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl:'https://www.gravatar.com/avatar?d=identicon'
    }
  };
  
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt=""/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge {...this.state.form} />
            </div>
            <div className="col-6">
              <BadgeFrom  onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
