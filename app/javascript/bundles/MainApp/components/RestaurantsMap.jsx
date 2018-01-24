import PropTypes from 'prop-types';
import React from 'react';

export default class RestaurantsMap extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-md-7 map">
        * Map Goes Here *
      </div>
    );
  }
}
