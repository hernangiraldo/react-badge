import React, { Component } from "react";

import twitterLogo from '../images/twitter.svg'

import './styles/BadgeItem.css'

class BadgeItem extends Component {
  render() {

    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;

    return (
      <li className="BadgeItem">
        <img className="BadgeItem__avatar" src={avatarUrl} alt=""/>

        <div>
          <div><strong>{firstName} {lastName}</strong></div>
          <div>
            <img className="BadgeItem__logo-twitter" src={twitterLogo} alt="Logo de twitter"/>
            <span className="BadgeItem__twitter">@{twitter}</span>
          </div>
          
          <div>{jobTitle}</div>
        </div>
      </li>
    )
  }
}

export default BadgeItem;