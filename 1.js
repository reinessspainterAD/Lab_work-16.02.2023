"use strict";
const n = 0,
  m = 100,
  count = 100;
let number = [];
for (let index = 0; index < count; index++) {
  number.push(
    Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m)))
  );
}
console.log(number);
