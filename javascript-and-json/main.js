const books = [
  {
    isbn: '0135957052',
    title: 'The Pragmatic Programmer: Your Journey To Mastery, 20th',
    author: 'David Thomas Andrew Hunt'
  },
  {
    isbn: '180324271X',
    title: 'Responsive Web Design with HTML5 and CSS:',
    author: 'Ben Frain'
  },
  {
    isbn: '978-1801072724',
    title: 'Polished Ruby Programming',
    author: 'Jeremy Evans'
  }
];

console.log('array books: ', books);
console.log('typeof array books: ', typeof books);

const jsonBooks = JSON.stringify(books);
console.log('jsonBooks: ', jsonBooks);
console.log('typeof jsonBooks: ', typeof jsonBooks);

const string = '{"Number id": "0123456789", "String name": "Baby Yoda"}';
console.log('string: ', string);
console.log('typeof string: ', typeof string);

const object = JSON.parse(string);
console.log('object: ', object);
console.log('type of object: ', typeof object);
