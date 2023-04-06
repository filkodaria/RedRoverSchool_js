// BLOCK_1

// TASK_1 - Rhombus_numeric

let heightRhomb = 11;

for (let i = 1; i <= heightRhomb; i++) {
  let lineRhomb = "";
  for (let j = 1; j <= heightRhomb - i; j++) {
    lineRhomb += " ";
  }
  for (let k = 1; k <= i; k++) {
    if (k >= 10) {
      lineRhomb += k % 10;
    } else
    lineRhomb += k;
	}
  for (let l = i - 1; l >= 1; l--) {
    if (l >= 10) {
      lineRhomb += l % 10;
    } else lineRhomb += l;
  }
  console.log(lineRhomb);
}
for (let i = heightRhomb - 1; i >= 1; i--) {
  let lineRhomb = "";
  for (let j = 1; j <= heightRhomb - i; j++) {
    lineRhomb += " ";
  }
  for (let k = 1; k <= i; k++) {
    if (k >= 10) {
      lineRhomb += k % 10;
    } else lineRhomb += k;
	}
  for (let l = i - 1; l >= 1; l--) {
    if (l >= 10) {
      lineRhomb += l % 10;
    } else lineRhomb += l;
  }
  console.log(lineRhomb);
}


// TASK_2 - Tree

// variant_1
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

// variant_2
let hTree = 5;
let space = ' ';
let star = '*';
let sum = 1;

for (let i = 1; i <= hTree; i++) {
  let lTree = '';
  lTree += space.repeat(hTree - i) + star.repeat(sum);
  sum += 2;
  console.log(lTree);
}


// TASK_3 - Triangle_numeric

let heightTrngl = 5;

for (let i = 1; i <= heightTrngl; i++) {
  let num = i;
  let line = '';
  let space = ' ';
  
  for (let j = 1; j <= i; j++) {
    line += num + space;
    num = num + (heightTrngl - j);
	}
  console.log(line);
}


// TASK_4 - Sandwich_bar



// BLOCK_2