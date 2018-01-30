import PropTypes from 'prop-types';
import React from 'react';
import Filter from './Filter';


export default class SelectionFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onFilterChange(this.props.filter, e.target.value);
  }

  render() {
    return (
      <span className={"col-md-3 text-center selection-filter"}>
        <label>{this.props.title}</label>
        <select className="form-control" value={this.props.filter.currentFilterValue} onChange={this.handleChange}>
          {this.props.items.map((item, index) =>
            <option key={index} value={item}>{item}</option>,
          )}
        </select>
      </span>
    );
  }
}

SelectionFilter.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  filter: PropTypes.instanceOf(Filter),
  onFilterChange: PropTypes.func.isRequired,
};
