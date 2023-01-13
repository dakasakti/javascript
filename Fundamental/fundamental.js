// variable
let firstName;
firstName = "Dakasakti";
console.log(firstName);

// constant
const APP = "Tutorial Javascript";
console.log(APP);

// dataType
// Undefined
let x;
console.log(typeof x);

// number
let number = 10;
console.log(typeof number);

number++;
console.log(number);

// string
let greet = "Hello World";
console.log(typeof greet);

// concatenation
let moreGreet = greet + greet;
console.log(moreGreet);

// interpolation
console.log(`Hello, my name is ${firstName}.`);

// boolean
let benar = true;
let salah = false;

console.log(typeof benar);
console.log(typeof salah);

// null
let someLaterData = null;
console.log(someLaterData);

// symbol
const id = Symbol("id");
console.log(id);

// operator
// assignment
let y = 5;

x += y;

console.log(x);

// comparison
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

// logical
/* AND operator */
console.log(a < 15 && b > 10);
console.log(a > 15 && b > 10);

/* OR operator */
console.log(a < 15 || b > 10);
console.log(a > 15 || b > 10);

/* NOT operator */
console.log(!(a < 15));
console.log(!(a < 15 && b > 10));

// if/else statement
if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}

// elseif
let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// ternary
let $nilai = 100;
$nilai == 100 ? "Perfect" : "Good";

// switch
greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);

// forLoop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// forOfloop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for (const arrayItem of myArray) {
  console.log(arrayItem);
}

// While and do-while
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 100);
