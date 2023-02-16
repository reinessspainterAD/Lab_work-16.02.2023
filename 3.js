"use strict";
const roadMines = [false, true, false, false, false, false, true, false, true, false];
let hpTank = 2;
for (let index = 0; index < roadMines.length; index++) {
  if (hpTank === 0) {
    break;
  } else if (roadMines[index]) {
    hpTank = hpTank - 1;
  }
  if (!roadMines[index]) {
    console.log(`Танк переместился на ${index + 1}`);
  } else if (hpTank === 1 && roadMines[index]) {
    console.log("Танк повреждён");
  } else {
    console.log("Танк уничтожен");
  }
}
