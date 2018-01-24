import PropTypes from 'prop-types';
import React from 'react';

export default class AppFooter extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <footer className="footer text-center">
        Powered by WeWork&trade;
      </footer>
    );
  }
}
