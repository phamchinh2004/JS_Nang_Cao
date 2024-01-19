// ||= assigns the right side value only if the left is a falsy value.
// ||= Chỉ gán giá trị bên phải nếu bên trái là giá trị falsy
let a = null;
//Cách 1
// if (!a) {
//   a = 10;
// }
//Cách 2
// a = a || 10;
//Cách 3
a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.
// ||= Chỉ gán giá trị bên phải nếu bên trái là giá trị truthy

let b = 10;
//Cách 1
if (b) {
  b = 20;
}
//Cách 2
b = b && 20;
//Cách 3
b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.
// ||= Chỉ gán giá trị bên phải nếu bên trái là null hoặc undefined

let c = null;
//Cách 1
if (c === null || c === undefined) {
  c = 20;
}
//Cách 2
c = c ?? 20;
//Cách 3
c ??= 20;

console.log(c);