import Book from './Book.js';

export default class PrintedBook extends Book {
  _pageCount = 0;

  constructor({
    title,
    author,
    year,
    pageCount,
  }) {
    super({
      title,
      author,
      year,
    });
    this.pageCount = pageCount;
  }

  get info() {
    return `${super.info}, Pages: ${this._pageCount}`;
  }

  getDescription() {
    return `${super.getDescription()} It has ${this._pageCount} pages.`;
  }

  set pageCount(count) {
    if (!Number.isInteger(count) || count <= 0) throw new Error('Page count must be a integer number greater than 0');

    this._pageCount = count;
  }
}
