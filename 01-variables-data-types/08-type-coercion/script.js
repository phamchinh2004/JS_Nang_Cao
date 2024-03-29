let x;

// Coerced to a string
x = 5 + '5'; //Result: 55 vì số + chuỗi thành nối số và chuỗi
console.log(x);
x = 5 + Number('5'); //Ép kiểu console.log(x);
console.log(x);
// Coerced to a number
x = 5 * '5';console.log(x);

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;console.log(x);

x = Number(null);console.log(x);
x = Number(true);console.log(x);
x = Number(false);console.log(x);

// true is coerced to a 1
x = 5 + true;console.log(x);

// false is coerced to 0 (falsy)
x = 5 + false;console.log(x);

// Undefined can't coerced because the result is NaN
x = 5 + undefined;console.log(x);

console.log(x, typeof x);