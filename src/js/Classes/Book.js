export default class Book {
  title = null;

  author = null;

  _year = null;

  constructor({
    title,
    author,
    year,
  }) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get info() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}`;
  }

  getDescription() {
    return `This is a book titled '${this.title}' by ${this.author}.`;
  }

  set year(year) {
    if (typeof year !== 'number' || year <= 0) throw new Error('Year must be a number and greater than 0');

    this._year = year;
  }
}
