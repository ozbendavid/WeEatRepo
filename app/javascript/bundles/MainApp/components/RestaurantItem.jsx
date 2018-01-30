import PropTypes from 'prop-types';
import React from 'react';
import StarRatings from 'react-star-ratings';

export default class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
  }

  convertCuisine = (cuisine) => {
    return String.fromCharCode((cuisine in RestaurantItem.cuisines) ? RestaurantItem.cuisines[cuisine] : 102);
  };

  render() {
    let restaurant = this.props.restaurant;
    let tenBisimage = restaurant.accepts_ten_bis ?
      <img className="ten-bis-logo"
        src="/assets/ten_bis-5cbb8a298e8f44bf400826012bd7981cd6209e724cbdbf37c1821cf8a5e61338.png"
        title="We accept 10bis :)"/> : '';

    return <li className="restaurant-item list-group-item">
      <div className="row">
        <span className="col-md-12 restaurant-name">{restaurant.name}</span>
      </div>
      <div className="row">
        <span className="align-middle">
          <span className="col-md-2 restaurant-detail cuisine" title={restaurant.cuisine + ' Restaurant'}>
            {this.convertCuisine(restaurant.cuisine)}
          </span>
          <span className="col-md-4 restaurant-detail">
            <StarRatings
              rating={parseFloat(restaurant.rating)}
              isSelectable={false}
              isAggregateRating={true}
              numOfStars={3}
              starWidthAndHeight={'20px'}
              starSpacing={'1px'}
              starEmptyColor={'rgb(200, 200, 200)'}
              starRatedColor={'rgb(50, 200, 50)'}
            />
          </span>
          <span className="col-md-4 restaurant-detail">
          ~{restaurant.max_delivery_time} min
          </span>
          <span className="col-md-2 restaurant-detail">
            {tenBisimage}
          </span>
        </span>
      </div>
    </li>;
  }
}

RestaurantItem.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

RestaurantItem.cuisines = {
  Sandwich: 56,
  Steak: 51,
  French: 52,
  American: 65,
  'New American': 87,
  Pizza: 76,
  Italian: 53,
  BBQ: 35,
  Seafood: 67,
  Ramen: 71,
  Mediterranean: 37,
  Desserts: 108,
  Bakery: 69,
};

