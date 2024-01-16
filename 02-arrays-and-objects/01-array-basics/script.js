let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Get value by index
x = numbers[0];//12

x = numbers[0] + numbers[3];//41

x = `My favorite fruit is an ${fruits[2]}`;//orange

x = numbers.length;//6
console.log(x);
fruits[2] = 'pear';//Gán lại giá trị cho Array Constructor

// length is not read-only
// fruits.length = 2;

fruits[3] = 'strawberry';//Gán thêm giá trị vào index thứ 3

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';//Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối
fruits[fruits.length] = 'peach';//Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối

x = fruits;

console.log(x);
