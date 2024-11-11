'use strict';

import Book from './Classes/Book.js';
import PrintedBook from './Classes/PrintedBook.js';
import Ebook from './Classes/Ebook.js';

(function () {
  const book1 = new Book({
    title: 'One Piece',
    author: 'Eiichiro Oda',
    year: 1997,
  });
  console.group(book1.info);
  console.log(book1.getDescription());
  console.groupEnd();

  const printedBook1 = new PrintedBook({
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    year: 1997,
    pageCount: 12770,
  });
  console.group(printedBook1.info);
  console.log(printedBook1.getDescription());
  console.groupEnd();

  const ebook1 = new Ebook({
    title: 'JoJo’s Bizarre Adventure',
    author: 'Hirohiko Araki',
    year: 1993,
    fileSize: 500,
  });
  console.group(ebook1.info);
  console.log(ebook1.getDescription());
  console.groupEnd();
}());
