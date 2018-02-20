class Sorter {
  constructor() {
    this.db = {};
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.db[Object.keys(this.db).length || 0] = element;
    // console.log(this.db);
  }

  at(index) {
    return this.db[index];
  }

  get length() {
    return Object.keys(this.db).length;
  }

  toArray() {
    return Object.entries(this.db).map((e) => e[1]);
  }

  sort(indices) {
    let sorted
    let sortBox = Object.entries(this.db).filter((e) => {
      return indices.includes(Number(e[0]));
    });
    let extracted = sortBox.map((e) => e[1]);
    if (this.comparator) {
      sorted = extracted.sort(this.comparator);
    } else { sorted = extracted.sort(); }

    let sortedArray = sortBox.map((e, i) => {
      return [e[0], e[1] = sorted[i]];
    });
    sortedArray.map(e => this.db[e[0]] = e[1])
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
module.exports = Sorter;
