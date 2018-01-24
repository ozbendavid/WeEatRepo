import PropTypes from 'prop-types';
import React from 'react';
import RestaurantItem from './RestaurantItem';

export default class RestaurantsList extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-md-5 restaurant-list">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </div>
    );
  }
}
