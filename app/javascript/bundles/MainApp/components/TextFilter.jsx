import PropTypes from 'prop-types';
import React from 'react';
import Filter from './Filter';

export default class TextFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onFilterChange(this.props.filter, e.target.value);
  };

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <div className="search selection-text-filter">
            <span className="fa fa-search"/>
            <input type="text"
              className="form-control"
              value={this.props.filter.currentFilterValue}
              onChange={this.handleChange}
              placeholder="Looking for something special?"/>
          </div>
        </div>
      </div>
    );
  }
}

TextFilter.propTypes = {
  filter: PropTypes.instanceOf(Filter),
  onFilterChange: PropTypes.func.isRequired,
};
