export default class Filter {
  constructor(id, field, nonActiveValue, filterFunction) {
    this.id = id;
    this.field = field;
    this.nonActiveValue = nonActiveValue;
    this.currentFilterValue = nonActiveValue;
    this.filterFunction = filterFunction;
  }

  isPassingFilter(value) {
    return this.nonActiveValue === this.currentFilterValue ||
      this.filterFunction(this.currentFilterValue, value);
  }
}
