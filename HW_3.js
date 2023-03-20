// TASK_1 - Calculator_switch

let value1 = 10;
let value2 = 2;
let operator = "/";

switch (operator) {
	case '+':
		if (isNaN(value1) || isNaN(value2)) {
      console.log("Please, enter numbers");
    } else
			console.log("Sum = " + (value1 + value2));
		break;
	case '-':
		if (isNaN(value1) || isNaN(value2)) {
      console.log("Please, enter numbers");
    } else
			console.log("Diff = " + (value1 - value2));
		break;
	case '*':
		if (isNaN(value1) || isNaN(value2)) {
      console.log("Please, enter numbers");
    } else
			console.log("Prod = " + value1 * value2);
		break;
	case '/':
		if (value2 == 0) {
			console.log("Second value cannot be null");
		} else if (isNaN(value1) || isNaN(value2)) {
			console.log("Please, enter numbers");
		} else
			console.log("Quot = " + value1 / value2);
		break;
	default:
		console.log('Check entered operator!');
}


// TASK_3 - Even numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 0) {
		console.log(arr[i]);
	}
}


// TASK_4 - Brackets

let arrBracket = [')', ')', '(', ')', ')', '(', '(']
count1 = 0;
count2 = 0;

for (let i = 0; i < arrBracket.length; i++) {
	if (arrBracket[i] == ')') {
		count1++;
	} else if (arrBracket[i] == '(') {
		count2++;
	}
}
if (count1 == count2) {
  console.log("All brackets have a pair");
} else console.log("Some pairs are missed!");


// TASK_5 - Creative task дешифратор
// 1_decoder program
let arrCipher = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
console.log(arrCipher.replace(/br/g, ''));

// 2_my own encoder program
let arrEncoder = 'My name is Daria';
let newEncoder = '';

for (let i = 0; i < arrEncoder.length; i++) {
	newEncoder += arrEncoder[i] + arrEncoder[i];
}
console.log(newEncoder);

// 3_my own decoder program (run with previous program)
let newDecoder = '';

for (let i = 0; i < newEncoder.length; i += 2) {
	newDecoder += newEncoder.slice(i, i+1);
	console.log(newDecoder);
}


// TASK_REVIEW_Tatiana - Tree & Rhombus
// tree
let sign = "*";
let range = 5;
let strTree = "";

for (let i = 0; i < range; i++) {
  if (i == 0) {
    strTree += "    " + sign;
  } else {
    strTree = strTree.substring(1) + sign + sign;
  }
  console.log(strTree);
}

// rhombus
let sign1 = "*";
let sign2 = " ";
let range1 = 3;
let strRhomb = "";

for (let i = 0; i < range1; i++) {
	if (i == 0) {
		strRhomb += '    ' + sign1;
	} else {
		strRhomb = strRhomb.substring(1) + sign1 + sign1;
	}
    console.log(strRhomb);
}
for (i = range1; i > 0; i--) {
	strRhomb = sign2 + strRhomb.slice(0, -2);
  console.log(strRhomb);
}
