import PropTypes from 'prop-types';
import React from 'react';
import RestaurantItem from './RestaurantItem';

export default class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const restaurantsList = this.props.restaurants.map((restaurant) =>
      <RestaurantItem key={restaurant.id} restaurant={restaurant}/>);

    return (
      <div className="col-md-4 restaurant-list list-group">
        <ul>
          {restaurantsList}
        </ul>
      </div>
    );
  }
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
};
