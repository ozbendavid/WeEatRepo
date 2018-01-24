import PropTypes from 'prop-types';
import React from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsMap from './RestaurantsMap';

export default class SearchResults extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row">
        <RestaurantsList />
        <RestaurantsMap />
      </div>
    );
  }
}
