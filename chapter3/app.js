// String Methods

// 1
let challenge = "Full Stack JS Track Days Of JavaScript";

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());

// 5

console.log(challenge.toLowerCase());

// 6

console.log(challenge.substring(5));

// 7

console.log(challenge.substring(0, 19));

// 8

console.log(challenge.includes("Script"));

// 9 + 10

console.log(challenge.split(" "));

// 11

let companies = "Facebook,Oracle,Google,Microsoft,Apple,IBM,Amazon";

console.log(companies.split(","));

// 12

console.log(challenge.replace("Track", "Group"));

// 13

console.log(challenge.charAt(15));

// 15

console.log(challenge.indexOf("a"));

// 16

console.log(challenge.lastIndexOf("a"));

// 17 + 18 + 19
let sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

// 20

let word = "     Hello     ";

word = word.trim();
console.log(word);
console.log(word.trim());

// 21

console.log(word.startsWith("H"));
console.log(word.endsWith("o"));

console.log(challenge.match("a"));

const lijat = "hello ";
const lijat2 = 5;

let result = lijat + lijat2;

console.log(result);
console.log(lijat.concat(lijat2));

console.log(lijat.repeat(2));

console.log(typeof 10 === typeof 10);

console.log(Math.round(parseFloat("9.8")) === 10);

const jargon = "jargon";

const python = "python";

console.log(jargon.includes("on") && python.includes("on"));

const check = "I hope this course is not full of jargon";

console.log(check.includes("jargon"));

const random = Math.floor(Math.random() * 100);

console.log(random);

const max = 110;
const min = 50;

const random50 = Math.floor(Math.random() * (max - min)) + min;

console.log(random50);

const js = "JavaScript";

const randomLetter = Math.floor(Math.random() * js.length);

console.log(js[randomLetter]);

console.log(
  "%cHello World",
  "color:#fce51a;background:red;padding:20px;font-size:30px"
);

// --------------------------------------------

console.log("-----------------------------------------------------------");

// Conditions

function grade(mark) {
  if (mark >= 90 && mark < 100) {
    return "S";
  } else if (mark >= 80 && mark < 90) {
    return "A";
  } else if (mark >= 70 && mark < 80) {
    return "B";
  } else if (mark >= 60 && mark < 70) {
    return "C";
  } else if (mark >= 50 && mark < 60) {
    return "D";
  } else if (mark >= 40 && mark < 50) {
    return "E";
  } else if (mark >= 0 && mark < 40) {
    return "student has failed";
  } else {
    return "invalid mark";
  }
}

console.log(grade(55));
console.log(grade(90));
console.log(grade("k"));
console.log(grade(0));

function even(num) {
  if (num % 2 === 0) {
    return num + " is Even";
  } else {
    return num + " is Odd";
  }
}

console.log(even(8));
console.log(even(5));
console.log(even(6));
console.log(even(3));

function notANumber(num) {
  if (isNaN(num)) {
    return "is Not a Number";
  } else {
    return "is Valid Number";
  }
}

console.log(notANumber(5));
console.log(notANumber("5l"));

function Laregst(n1, n2) {
  return n1 > n2 ? "is the largest" : n1 < n2 ? "is the smallest" : "equal";
}

console.log(Laregst(10, 10));

function calc(operator, n1, n2) {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "%":
      return n1 % n2;
    default:
      return "invalid operator";
  }
}

console.log(calc(8, 20, 5));
console.log(calc("-", 20, 5));
console.log(calc("j", 20, 5));

/*

Print num1 is the largest if num1>num2 and num1>num3.
Print num2 is the largest if num2<num3.
Else print num3.
*/

function findLargest(n1, n2, n3) {
  return n1 > n2 && n1 > n3
    ? n1 + " is the largest"
    : n2 > n3
    ? n2 + " is the largest"
    : n3 + " is the largest";
}

console.log(findLargest(10, 11, 16));

// -------------------------------

console.log("----------------------------------");

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let j = 0;

// while (j < 5) {
//   console.log(j);
//   j++;
// }

// let m = 0;

// do {
//   console.log(m);
// } while (m > 5);

// www.facebook.com#login

function url(url) {
  //   return url.split("#")[0];
  return url.slice(0, url.indexOf("#"));
}

console.log(url("www.facebook.com#login"));

// EXO

// 1

function area(b, h) {
  return (1 / 2) * b * h;
}
console.log(area(7, 4));

// 2

function findParameter(h, w) {
  return (h + w) * 2;
}
console.log(findParameter(2, 4));

// 3

function concat(n1, n2) {
  return n2 + "," + n1;
}
console.log(concat("lina", "sd"));

// 4

function sum(n1, n2) {
  if (typeof n1 === "string" || typeof n2 == "string") {
    return;
  }
  return n1 + n2;
}
console.log(sum("dddd", 4));

let companiess = "Facebook,Oracle,Google,Microsoft,Apple,IBM,Amazon";

function checkDoubleO(companies) {
  companies = companies.split(",");

  // console.log(companies);
  let newCompanies = "";
  // for (let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  //   let count = 0;

  //   for (let j = 0; j < companies[i].length; j++) {
  //     console.log(companies[i][j]);
  //     if (companies[i][j].toLowerCase() == "o") {
  //       count++;
  //     }
  //   }

  //   if (count > 1) {
  //     newCompanies += " " + companies[i];
  //   }
  // }

  // return newCompanies;

  companies.filter((c) => {
    console.log(c);
    let count = 0;
    c.split("")
      .map((comp) => {
        comp === "o" ? count++ : "";
      })
      .join("");

    count > 1 ? (newCompanies += " " + c) : "";
  });
  return newCompanies;
}

console.log(checkDoubleO("Facebook,Oracle,Google,Microsoft,Apple,IBM,Amazon"));

// function checkAge(age, year) {
//   age = parseInt(prompt("Enter your Age"));
//   year = new Date();

//   if (age === "") {
//     return "please fill in the field";
//   }

//   if (isNaN(age)) {
//     return "invalid input";
//   }

//   let result = year.getFullYear("Mar 22 23") - age;

//   if (result < 18) {
//     return "Underage";
//   } else {
//     return "You can pass the diving test";
//   }
// }

// console.log(checkAge());

function noBoringZeros(n) {
  while (n % 10 === 0) {
    n = n / 10;
  }
  return n;
}

console.log(noBoringZeros(10900100));

/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).
*/

function countVowls(str) {
  // let vowls = /[aeiou]/;
  let count = 0;
  let vowls = "aeiou";
  for (let i = 0; i < str.length; i++) {
    // if (vowls.test(str[i])) {
    //   count++;
    // }
    if (vowls.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowls("hello"));
console.log(countVowls("aeiou"));

/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

function setAlarm(e, v) {
  // return e && !v ? true : false;
  if (e === true && v === false) {
    return true;
  }

  return false;
}

console.log(setAlarm(true, false));
console.log(setAlarm(false, false));

// change the repeating letter to ) if its repeated or ( if its not repeated *upperCase and lowerCase are counted

// "hello"
// "(())("

// "h=>1 == ( // e=>1 == ( // l=>2 == )) // o=>1 == ("

function repaetingAndReplace(str) {
  str = str.toLowerCase();
  let newStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
  //     newStr += ")";
  //   } else {
  //     newStr += "(";
  //   }
  // }

  str
    .split("")
    .map((s) =>
      str.indexOf(s) !== str.lastIndexOf(s) ? (newStr += ")") : (newStr += "(")
    );
  return newStr;
}

console.log(repaetingAndReplace("hello"));
console.log(repaetingAndReplace("Microsoft"));
console.log(repaetingAndReplace("Facebook"));

// count how many letter in a string and return the count
// "hello","o"=>1
// "welcome back","e"=> 2

function howany(str, l) {
  let count = 0;
  // +str.split("").map((s) => (s === l ? count++ : ""));
  // return count;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === l) {
      count++;
    }
  }

  return count;
}

console.log(howany("hello", "l"));

// "hello" => "hElLo"
// "welcome" => "wElCoMe"

function upDown(str) {
  let newS = "";
  // str
  //   .split("")
  //   .map((x, i) =>
  //     i % 2 === 0 ? (newS += x.toLowerCase()) : (newS += x.toUpperCase())
  //   );

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newS += str[i].toLowerCase();
    } else {
      newS += str[i].toUpperCase();
    }
  }

  return newS;
}

console.log(upDown("hello"));

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(str) {
  let count = 0;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += str[i];
      count = 0;
    } else if (count % 2 === 0) {
      newStr += str[i].toUpperCase();
      count++;
    } else {
      newStr += str[i].toLowerCase();
      count++;
    }
  }

  return newStr;
}

console.log(toWeirdCase("Weird string case"));
console.log(toWeirdCase("weirdcase in Ruby"));

console.log("-------------------------------------");

// -----------------------------------------------------
// Arrays

const cars = [
  "Volvo",
  15,
  true,
  undefined,
  null,
  [],
  {},
  function test() {
    return "hello";
  },
];

const arr = [];

console.log(arr);

arr.push(1);
arr.push(2);
arr.push(3);
arr.push("hello");
arr.push([1, 2, 3, 4, 5, 6]);
arr.push({
  name: "khaled",
});

console.log(arr);

arr.pop();
arr.pop();
arr.pop();

console.log(arr);

arr.unshift(0);
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr);

arr.shift();
arr.shift();
arr.shift();

console.log(arr);

// 1
let ar = [];
console.log(ar);

const arrr = [1, "ll", [], function () {}, null];
console.log(arrr);
console.log(arrr.length);
console.log(arrr[0]);
console.log(arrr[Math.floor(arrr.length / 2)]);
console.log(arrr[arrr.length - 1]);

let sam = [1, 8, true, false, undefined, "khalad"];
console.log(sam);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// console.log(itCompanies);
// console.log(itCompanies.length);

// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length - 1]);

// function IT(itCompanies, company) {
//   for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
//   }

//   if (itCompanies.includes(company)) {
//     return company;
//   } else {
//     return "it doesnt exist";
//   }
// }

// console.log(IT(itCompanies, "Apple"));

// console.log(itCompanies.join(" "));

function checkDoubleO(copmanies) {
  let newCompanies = [];

  for (let i = 0; i < copmanies.length; i++) {
    let count = 0;
    for (let j = 0; j < copmanies.length; j++) {
      if (copmanies[i][j] === "o") {
        count++;
      }
    }

    if (count > 1) {
      newCompanies.push(copmanies[i]);
    }
  }

  return newCompanies.join(" ");
}

console.log(checkDoubleO(itCompanies));
