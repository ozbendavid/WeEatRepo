import PropTypes from 'prop-types';
import React from 'react';
import SearchResults from './SearchResults';

export default class AppContent extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <main>
        <SearchResults />
      </main>
    );
  }
}
