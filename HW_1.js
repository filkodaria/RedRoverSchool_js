// TASK_1

let firstName;
let lastName;
firstName = 'John';
lastName = 'Adams';

document.write(firstName + ' ' + lastName + '<br>');
// alert(firstName + ' ' + lastName);
// window.alert(firstName + ' ' + lastName);

firstName = 'Anna';
lastName = 'Karenina';
document.write(firstName + ' ' + lastName + '<br>');

// TASK_2

let a;
let c = 9;
let str = 'Hi 5!';
let b = true;
let y = 9 + '1';
let x = 'a' / 6;

console.log(typeof(a));
console.log(typeof c);
console.log(typeof str);
console.log(typeof b);
console.log(typeof y);
console.log(typeof x);

// TASK_3

const dateOfBirth = '1988-01-15';
const myName = 'Daria';
const myPlanet = 'The Earth';

document.write('const: ' + dateOfBirth + ', ' + myName + ', ' + myPlanet + '<br>');


// TASK_REVIEW_Tatiana

//Task #1

let weight;
let height;
let BMI;

weight = 57;
height = 1.63;
BMI = weight / (height ** 2);
console.log(`My BMI is ${BMI}`);
document.write(`Daria's BMI is ${BMI}`);

//Task #2

let variab1 = 'Daria';
let variab2 = 2023;
let temp;
console.log(variab1, variab2);

temp = variab1;
variab1 = variab2;
variab2 = temp;

// console.log(variab1);
// console.log(variab2);
console.log(variab1, variab2);
