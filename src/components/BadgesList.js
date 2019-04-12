import React, { Component } from "react";

import BadgeItem from './BadgeItem';

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {
          this.props.badges.map(d => {
            return (
              <BadgeItem key={d.id} {...d} />
            )
          })
        }
      </ul>
    )
  }
}

export default BadgesList;
