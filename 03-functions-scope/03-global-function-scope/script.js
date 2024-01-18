// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global');//Output: 100 'in global'

function run() {//Truy cập các biến toàn cầu theo hàm
  // Access global vars in functions
  console.log(window.innerHeight);//Output: 314
  console.log(x, 'in function');//Output: 100 'in function'
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');//Truy cập các biến toàn cầu theo khối
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Can not access a function scoped variable in global scope
console.log(y);//Không truy cập được

add();