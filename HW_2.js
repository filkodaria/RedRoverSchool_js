// TASK_1 - Vacation

// variant A
let monthOfVacation = 'JuLy';

if (
	monthOfVacation.toLowerCase() == 'july' ||
	monthOfVacation.toLowerCase() == 'august'
) {
	console.log('approved')
} else { 
	console.log('denied')
}

// variant B
let month = prompt('Please, enter a prefer month for your vacation');

if (
	month.toLowerCase() == 'july' ||
	month.toLowerCase() == 'august'
) {
	alert(`Your request for vacation in ${month} is approved`)
} else { 
	alert(`Your request for vacation in ${month} is denied`)
}


// TASK_2 - Calculator

// variant A
let value1 = 10;
let value2 = 5;
let resultAdd = value1 + value2;
let resultSubstr = value1 - value2;
let resultMultipl = value1 * value2;
let resultDiv = value1 / value2;

if (typeof value1 != "number" || typeof value2 != "number") {
	console.log('Please, enter numbers')
} else if (value2 === 0) {
	console.log('Second value cannot be null')
} else {
	console.log(`Sum=${resultAdd}, Diff=${resultSubstr}, 
	Prod=${resultMultipl}, Quot=${resultDiv}`)
}

// variant B
let value3 = "0";
let value4 = 2;
let operator = "/";

if (
  isNaN(value3) ||
  isNaN(value4) ||
  typeof value3 != "number" ||
  typeof value4 != "number"
) {
  console.log("Please, enter numbers");
} else if (operator === "+") {
  console.log("Sum = " + (value3 + value4));
} else if (operator === "-") {
  console.log("Diff = " + (value3 - value4));
} else if (operator === "*") {
  console.log("Prod = " + value3 * value4);
} else if (operator === "/") {
  if (value4 === 0) {
    console.log("Second value cannot be null");
  } else {
    console.log("Quot = " + value3 / value4);
  }
} else {
  console.log("Try again");
}

// variant С
let value5 = prompt("Please, enter fist number");
let value6 = prompt("Please, enter second number");
let mathOp = prompt("Please, enter an operation with numbers (+ - * /)");

if (
  value5 === "" ||
  value5 === " " ||
  isNaN(value5) ||
  value6 === "" ||
  value6 === " " ||
  isNaN(value6)
) {
  alert("Please, enter numbers");
} else if (mathOp == "+") {
  alert("Sum = " + (Number(value5) + Number(value6)));
} else if (mathOp == "-") {
  alert("Diff = " + (value5 - value6));
} else if (mathOp == "*") {
  alert("Prod = " + value5 * value6);
} else if (mathOp == "/") {
  if (value6 == 0) {
    alert("Second value cannot be null");
  } else {
    alert("Quot = " + value5 / value6);
  }
} else {
  alert("Please, try again");
}


// TASK_3 - Snail

/* Улитка ползёт вверх по стене высотой 5 метров. 
Каждый день она проползает вверх на 3 метра,
а каждую ночь съезжает вниз на 2 метра. 
За сколько дней она доползёт до вершины стены. */

const wallHeight = 5;
const goUp = 3;
const goDown = 2;

const dayPath = goUp - goDown;

const rest = wallHeight - goUp;
let daySuccess = 1;

if (rest > 0) { 
	daySuccess += rest / dayPath;
}
console.log(daySuccess);


// TASK_REVIEW_Tatiana - Tickets
let ticket_price = 100;
let age = 80;

if (age < 2) {
	console.log('Your ticket costs ' + ticket_price * 0.1 + '$');
} else if (age < 18) {
	console.log("Your ticket costs " + ticket_price * 0.5 + "$");
} else if (age < 65) {
	console.log("Your ticket costs " + ticket_price + "$");
} else { 
	console.log("Your ticket costs " + ticket_price * 0.6 + "$");
}
