// String
const firstName = 'Sara';

// Number
const age = 30; //int
const temp = 98.9; //float, double

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
const score = undefined;

// Symbol
//Symbol thường được sử dụng để tạo các thuộc tính hoặc phương thức đặc biệt trong đối tượng, 
//làm cho chúng trở nên duy nhất và không thể bị trùng lặp. 
//Điều này làm cho Symbol hữu ích trong các trường hợp mà tính độc lập và duy nhất là quan trọng.
const id = Symbol();
const mySymbol={
  [id]:123
}
console.log(mySymbol);
// console.log(id);
// BigInt
const n = 9007199254740991n;//Nếu số quá lớn mà không thêm n thì tính toán có thể mất chính xác

// Reference Types (Tham chiếu)
const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
