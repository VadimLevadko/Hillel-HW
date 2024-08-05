'use strict';

const name = prompt('What is your name?');

const age = prompt('What is your age?');

const likesProgramming = confirm('Do you like programming?');

console.log(name, age, likesProgramming);


console.log(typeof name, typeof age, typeof likesProgramming);

const greeting =  `Welcome ${name}.`;

alert(greeting)


const numericAge = Number(age)

const nextAge = numericAge + 1

console.log(nextAge)


const isAdult = age >= 18

console.log(isAdult)