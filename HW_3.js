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
// with array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 0) {
		console.log(arr[i]);
	}
}

// general_1
for (let i = 2; i <= 10; i += 2) {
	console.log(i);
}

// general_2
for (let i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}


// TASK_4 - Brackets

let arrBracket = ['(', ')', ')', '(', ')', ')', '(', '(']
count1 = 0;
count2 = 0;

for (let i = 0; i < arrBracket.length; i++) {
	if (arrBracket[i] == '(') {
		count1++;
	} else if (arrBracket[i] == ')') {
		count2++;
	}
}
console.log(`opening - ${count1}, closing - ${count2}`)
if (count1 == count2) {
  console.log("All brackets have pairs");
} else console.log("Some pairs are missed!");


// TASK_5 - Creative task дешифратор
// 1_decoder program
let arrCipher = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
// OR
console.log(arrCipher.replace(/br/g, ''));
// OR
let decoderResult = '';
for (i = 0; i < arrCipher.length; i += 3) {
	decoderResult += arrCipher[i];
}
console.log(decoderResult);

// 2_my own encoder program
let arrEncoder = 'My name is Daria';
let newEncoder = '';

for (let i = 0; i < arrEncoder.length; i ++) {
	newEncoder += arrEncoder[i] + arrEncoder[i];
}
console.log(newEncoder);

// 3_my own decoder program (run with previous program)
let newDecoder = '';

for (let i = 0; i < newEncoder.length; i += 2) {
	newDecoder += newEncoder[i];                        // += newEncoder.slice(i, i+1) 
	console.log(newDecoder);
}


// TASK_REVIEW_Tatiana - Tree & Rhombus

// Variant_1
// TREE
let sign = "*";
let range = 7;
let strTree = "";

for (let i = 0; i < range; i++) {
  if (i == 0) {
		for (let ind = 0; ind < (range - 1); ind ++) {
			strTree += " ";
		}
		strTree += sign;
  } else {
    strTree = strTree.substring(1) + sign + sign;
  }
  console.log(strTree);
}

// RHOMBUS
let sign1 = "*";
let sign2 = ' ';
let rangeRhomb = 20;
let strRhomb = "";

for (let i = 0; i < rangeRhomb; i++) {
  if (i == 0) {
    for (let j = 0; j < rangeRhomb - 1; j++) {
      strRhomb += " ";
    }
    strRhomb += sign1;
  } else {
    strRhomb = strRhomb.substring(1) + sign1 + sign1;
  }
  console.log(strRhomb);
}
for (let i = rangeRhomb; i > 0; i--) {
  strRhomb = sign2 + strRhomb.slice(0, -2);
  console.log(strRhomb);
}


// Variant_2_HW_review
// TREE
let heightTree = 7;
let middleTree = heightTree - 1;

for (let i = 0; i < heightTree; i++) {
	let lineTree = "";
	for (let j = 0; j < middleTree - i; j++) {
		lineTree += ' ';
	}
	for (let k = 0; k < (2*i + 1); k++) {
		lineTree += "*";
	}
	console.log(lineTree);
}

// RHOMBUS
let heightRhomb = 5;
let middleRhomb = heightRhomb - 1;

for (let i = 0; i < heightRhomb; i++) {
  let lineRhomb = "";
  for (let j = 0; j < middleRhomb - i; j++) {
    lineRhomb += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    lineRhomb += "*";
  }
  console.log(lineRhomb);
}
for (let i = heightRhomb - 2; i >= 0; i--) {
  let lineRhomb = "";
  for (let j = 0; j < middleRhomb - i; j++) {
    lineRhomb += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    lineRhomb += "*";
  }
  console.log(lineRhomb);
}