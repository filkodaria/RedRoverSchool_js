// Task_1 - palindrome

let str = 'Anna';
// let str = '1234321';

let arr = str.toLowerCase().split('');
let compare = Math.trunc(arr.length / 2);
let count = 0;

for (let i = 0; i < str.length / 2; i++) {
	let first = arr.shift();
	let last = arr.pop();
	if (first == last) {
		count += 1;
	}
	if (first != last) {
		break
	}
}

if (count == compare) {
  console.log("It is a polindrome");
} else {
  console.log("It isn't a polindrome");
}


// Task_2
