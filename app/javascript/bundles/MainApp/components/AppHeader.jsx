import PropTypes from 'prop-types';
import React from 'react';
import TextFilter from './TextFilter';
import SelectionFilter from './SelectionFilter';

export default class AppHeader extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="row">
        <h1 className="text-center">WeEat</h1>
        <h4 className="text-center">We Want Eat All, We Want Eat Now!</h4>
        <TextFilter/>
        <div className="row justify-content-center selection-filters" >
          <SelectionFilter/>
          <SelectionFilter/>
          <SelectionFilter/>
        </div>
      </header>
    );
  }
}
