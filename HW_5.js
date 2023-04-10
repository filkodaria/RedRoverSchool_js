// Task_1

function calculate(a, b, operator) {
	let result;
	if (operator == "+") {
		result = a + b;
	} else if (operator == "-") {
		result = a - b;
	} else if (operator == "*") {
		result = a * b;
	} else if (operator == "/" && b != 0) {
		result = a / b;
	}
	return result;
}
console.log(calculate(6, 0, '/'))


// Task_2

function showGreeting(yourName) {
	console.log(`Hi, ${yourName}! I'm happy to see you here!`)
}
showGreeting('Daria');


// TASK_REVIEW_Stan

// Collatz_Sequence
function collatzSeq(num) {
	if (num > 0) {
		let res = num;
		do {
			if (res % 2 == 0) {
				res = res / 2;
			} else if (res % 2 != 0) {
				res = res * 3 + 1;
			}
			console.log(res);
		} while (res != 1);
		return res;
	} else {
		return false;
	}
}
console.log(collatzSeq(7));

