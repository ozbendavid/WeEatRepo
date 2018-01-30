import PropTypes from 'prop-types';
import React from 'react';
import TextFilter from './TextFilter';
import SelectionFilter from './SelectionFilter';
import AggregatedFilter from './AggregatedFilter';

export default class AppHeader extends React.Component {
  static minimalRatings = [1, 2, 3];
  static deliveryTimes = [15, 30, 45, 60, 75, 90, 105, 120];

  constructor(props) {
    super(props);
  }

  onFilterChanged = (filter, newFilterValue) => {
    this.props.onFilterChange(filter, newFilterValue);
  }

  render() {
    return <header>
      <div className="row text-center">
        <div className="col-12 text-center">
          <h1>WeEat</h1>
        </div>
      </div>
      <div className="row text-center" >
        <div className="col-12 text-center">
          <h4>We Want Eat All, We Want Eat Now!</h4>
        </div>
      </div>
      <TextFilter filter={this.props.filters.filter[1]} onFilterChange={this.onFilterChanged} />
      <div className="row justify-content-md-center selection-filters">
        <SelectionFilter filter={this.props.filters.filter[2]}
          onFilterChange={this.onFilterChanged}
          title={'Cuisines'}
          items={[this.props.filters.filter[2].nonActiveValue].concat(this.props.uniqueCuisines)} />
        <SelectionFilter filter={this.props.filters.filter[3]}
          onFilterChange={this.onFilterChanged}
          title={'Minimal Rating'}
          items={[this.props.filters.filter[3].nonActiveValue].concat(AppHeader.minimalRatings)} />
        <SelectionFilter filter={this.props.filters.filter[4]}
          onFilterChange={this.onFilterChanged}
          title={'Maximum Delivery Time (Minutes)'}
          items={[this.props.filters.filter[4].nonActiveValue].concat(AppHeader.deliveryTimes)} />
      </div>
    </header>;
  }
}

AppHeader.propTypes = {
  filters: PropTypes.instanceOf(AggregatedFilter),
  uniqueCuisines: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
