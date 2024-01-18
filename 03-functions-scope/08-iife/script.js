// IFFE -Immediately Invoked Function Expression. Syntax (Has it's own scope and runs right away)- Biểu thức hàm được gọi ngay lập tức
(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
(function (name) {//Có tham số
  console.log('Hello ' + name);
})('Shawn');//Đối số

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})();