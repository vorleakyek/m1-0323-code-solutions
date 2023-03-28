const num1 = -1;
const num2 = 0;
const num3 = 39;
const maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue: ', maximumValue);

const heroes = ['Black Panther', 'X-Men', 'Superman', 'Spider-Man'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

const library = [
  {
    title: 'JavaScript from Beginner to Professional',
    author: 'Laurence Lars Svekis'
  },
  {
    title: 'JavaScript: The Definitive Guide: Master the World\'s Most- Used Programming Language',
    author: 'David Flanagan'
  },
  {
    title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
    author: 'Marijn Haverbeke'
  }
];

const lastBook = library.pop();
console.log('value of lastBook: ', lastBook);
const firstBook = library.shift();
console.log('value of firstBook: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

const fullName = 'Vorleak Yek';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
