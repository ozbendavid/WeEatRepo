import React from 'react';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AggregatedFilter from './AggregatedFilter';
import Filter from './Filter';

export default class MainApp extends React.Component {
  static restaurantsUrl = 'http://localhost:3000/restaurants.json';

  static generateInitialFilter() {
    let filter = new AggregatedFilter();
    filter.addFilter(new Filter(1, 'name', '', function (filter, name) {
      return name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    }
    )).addFilter(new Filter(2, 'cuisine', 'What ever...', function (filter, cuisine) {
      return cuisine === filter;
    }
    )).addFilter(new Filter(3, 'rating', 'I\'m not picky...', function (filter, rating) {
      return rating >= filter;
    })).addFilter(new Filter(4, 'max_delivery_time', 'I\'m in no rush...', function (filter, deliveryTime) {
      return deliveryTime <= filter;
    }));
    return filter;
  }

  constructor(props) {
    super(props);
    this.filters = MainApp.generateInitialFilter();
    this.state = { restaurants: [], filters: this.filters, uniqueCuisines: [] };
  }

  componentWillMount() {
    fetch(MainApp.restaurantsUrl)
      .then((response) => response.json())
      .then((response) => {
        let uniqueCuisines = Array.from(new Set(response.map(item => item.cuisine)));
        this.setState({
          restaurants: response,
          uniqueCuisines: uniqueCuisines,
        });
      });
  }

  handleFilterChange = (filter, newFilterValue) => {
    this.filters.filter[filter.id].currentFilterValue = newFilterValue;
    this.setState({ filters: this.filters });
  }

  render() {
    return (
      <div className="container-fluid">
        <AppHeader uniqueCuisines={this.state.uniqueCuisines}
          onFilterChange={this.handleFilterChange}
          filters={this.state.filters} />
        <AppContent restaurants={this.state.restaurants} filters={this.state.filters} />
        <AppFooter />
      </div>
    );
  }
}
