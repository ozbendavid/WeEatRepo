/**
 * General filter
 * Pass parameters to constructor
 * Use isPassingFilter with the object you want to check if it passes the filter
 */
export default class Filter {
  /**
   * Constructs a filter object.
   *
   * @constructor
   *
   * @param {number} id
   *   Filter unique id. Important mainly when using AggregatedFilter
   * @param {string} field
   *   The field name on which this filter works.
   * @param {string} nonActiveValue
   *  The value that means 'pass all' for this filter. Filter will start with this value.
   * @param {function} filterFunction
   * The filter function.
   * Should have two parameters (filter, xxx) where filter will always be the filter current value
   */
  constructor(id, field, nonActiveValue, filterFunction) {
    this.id = id;
    this.field = field;
    this.nonActiveValue = nonActiveValue;
    this.currentFilterValue = nonActiveValue;
    this.filterFunction = filterFunction;
  }

  set filterValue(newFilterValue) {
    this.currentFilterValue = newFilterValue;
  }

  isPassingFilter(value) {
    return this.nonActiveValue === this.currentFilterValue ||
      this.filterFunction(this.currentFilterValue, value);
  }
}
