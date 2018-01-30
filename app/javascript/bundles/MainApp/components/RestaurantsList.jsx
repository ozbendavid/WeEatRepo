import PropTypes from 'prop-types';
import React from 'react';
import RestaurantItem from './RestaurantItem';

export default class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRestaurantSelected = (restaurant) => {
    this.props.onRestaurantSelected(restaurant);
  }

  render() {
    const restaurantsList = this.props.restaurants.map((restaurant) =>
      <RestaurantItem key={restaurant.id}
        restaurant={restaurant}
        onRestaurantSelected={this.handleRestaurantSelected}
        isSelected={restaurant.id === this.props.selectedRestaurant.id}/>);

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
  onRestaurantSelected: PropTypes.func.isRequired,
  selectedRestaurant: PropTypes.object.isRequired,
};
