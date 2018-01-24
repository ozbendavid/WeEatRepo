import PropTypes from 'prop-types';
import React from 'react';

export default class SelectionFilter extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-md-3 text-center selection-filter">
        * This is Selection Filter *
      </div>
    );
  }
}
