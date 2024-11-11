import Book from './Book.js';

export default class Ebook extends Book {
  _fileSize = 0;

  constructor({
    title,
    author,
    year,
    fileSize,
  }) {
    super({
      title,
      author,
      year,
    });

    this.fileSize = fileSize;
  }

  get info() {
    return `${super.info}, File Size: ${this._fileSize}MB`;
  }

  getDescription() {
    return `${super.getDescription()} File size is ${this._fileSize} MB.`;
  }

  set fileSize(fileSize) {
    if (typeof fileSize !== 'number' || fileSize <= 0) throw new Error('File size must be a number and greater than 0');

    this._fileSize = fileSize;
  }
}
