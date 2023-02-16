"use strict";
const string1 = "Hello world";
let string2 = "";
for (let index = 0; index < string1.length; index++) {
  string2 += string1[string1.length - index - 1];
}
console.log(string2);