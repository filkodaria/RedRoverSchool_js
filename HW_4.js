//BLOCK_1

// TASK_1 - Rhombus_numeric (<=9 rows)

let heightRhomb = 9;

for (let i = 1; i <= heightRhomb; i++) {
  let lineRhomb = "";
  for (let j = 1; j <= heightRhomb - i; j++) {
    lineRhomb += " ";
  }
  for (let k = 1; k <= i; k++) {
    lineRhomb += k;
	}
	for (let l = i - 1; l > 0; l--) {
    lineRhomb += l;
  }
  console.log(lineRhomb);
}
for (let i = heightRhomb - 1; i >= 1; i--) {
  let lineRhomb = "";
  for (let j = 1; j <= heightRhomb - i; j++) {
    lineRhomb += " ";
  }
  for (let k = 1; k <= i; k++) {
    lineRhomb += k;
	}
	for (let l = i - 1; l > 0; l--) {
    lineRhomb += l;
  }
  console.log(lineRhomb);
}


// TASK_2 - Tree

let heightTree = 7;

for (let i = 1; i <= heightTree; i++) {
  let lineTree = "";
  for (let j = 1; j <= heightTree - i; j++) {
    lineTree += " ";
  }
  for (let k = 1; k <= 2*i - 1; k++) {
    lineTree += "*";
  }
  console.log(lineTree);
}

