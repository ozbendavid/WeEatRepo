import PropTypes from 'prop-types';
import React from 'react';

export default class RestaurantItem extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="restaurant-item">
        * This is restaurant item *
      </div>
    );
  }
}
