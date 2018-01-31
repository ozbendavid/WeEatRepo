import PropTypes from 'prop-types';
import React from 'react';
import SearchResults from './SearchResults';

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <SearchResults restaurants={this.props.restaurants} filters={this.props.filters}/>
      </main>
    );
  }
}

AppContent.propTypes = {
  filters: PropTypes.object.isRequired,
  restaurants: PropTypes.array.isRequired,
};
