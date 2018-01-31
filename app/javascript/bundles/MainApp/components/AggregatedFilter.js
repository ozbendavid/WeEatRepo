/**
 * General filters aggregation
 * Use addFilter to add filters of type Filter
 * Use isPassingFilter with the object you want to check if it passes all the filters
 */
export default class AggregatedFilter {
  constructor() {
    this.filter = {};
  }

  addFilter(filter) {
    this.filter[filter.id] = filter;
    return this;
  }

  isPassingFilter(data) {
    for (let key in this.filter) {
      let filter = this.filter[key];
      if (filter.field in data) {
        if (!(filter.isPassingFilter(data[filter.field]))) {
          return false;
        }
      }
    }
    return true;
  }
}
