// Ways to declare a variable
//Reassignment: gán lại
//Redeclared: khai báo lại
// `var`, `let`, & `const` Nếu khai báo ngoài hàm thì nó trở thành biến toàn cục

//VAR:
//-Có phạm vi "function-scopes" (phạm vi hàm), nghĩa là chỉ được sử dụng bên trong hàm mà nó được khai báo
//-Có thể gán lại giá trị
//-Được hoisted (đưa lên đầu) trong phạm vi của hàm

//LET:
//-Có phạm vi "block-scopes" (phạm vi khối), nghĩa là chỉ tồn tại trong khối mà nó được khai báo
//-Có thể gán lại giá trị
//-Không được hoisted như var

//CONST:
//-Có phạm vi "block-scopes" (phạm vi khối), nghĩa là chỉ tồn tại trong khối mà nó được khai báo
//-Không thể gán lại giá trị nếu  biến có kiểu tham trị, có thể gán lại giá trị nếu biến là kiểu object
//-Không được hoisted như var

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) { //Dòng này bị thừa tại vì điều kiện này là luôn đúng
  score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
//Manipulate: Thao tác, dùng, điều khiển
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple variables at once
//Once: một lần
let a, b, c;

// Declare multiple values at once
const d = 10,
  e = 20,
  f = 30;


console.log(d);
console.log(a);