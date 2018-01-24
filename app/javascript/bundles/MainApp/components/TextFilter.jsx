import PropTypes from 'prop-types';
import React from 'react';

export default class TextFilter extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="text-center">
        * This is Text Filter *
      </div>
    );
  }
}
