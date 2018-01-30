import PropTypes from 'prop-types';
import React from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsMap from './RestaurantsMap';
import AggregatedFilter from './AggregatedFilter';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedRestaurant: { id: 'none' } };
  }

  filteredRestaurants = () => {
    return this.props.restaurants.filter(restaurant => this.props.filters.isPassingFilter(restaurant)).slice(0, 9);
  }

  handleRestaurantSelected = (restaurant) => {
    this.setState({ selectedRestaurant: restaurant });
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <RestaurantsList restaurants={this.filteredRestaurants()}
          onRestaurantSelected={this.handleRestaurantSelected}
          selectedRestaurant={this.state.selectedRestaurant}/>
        <RestaurantsMap selectedRestaurant={this.state.selectedRestaurant}/>
      </div>
    );
  }
}

SearchResults.propTypes = {
  filters: PropTypes.instanceOf(AggregatedFilter),
  restaurants: PropTypes.array.isRequired,
};
