import PropTypes from 'prop-types';
import React from 'react';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

export default class MainApp extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}
