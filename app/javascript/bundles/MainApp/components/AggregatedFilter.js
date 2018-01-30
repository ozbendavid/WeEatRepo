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
      if (!(filter.isPassingFilter(data[filter.field]))) {
        return false;
      }
    }
    return true;
  }
}
