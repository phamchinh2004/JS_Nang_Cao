let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA'
  },
  hobbies: ['music', 'sports']
};

// Accessing object properties
x = person.name; // Dot notation       |2 cách này dùng để truy cập
x = person['age']; // Bracket notation |thuộc tính của js
console.log(x);

x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};//Thêm một phương thức greet vào đối tượng person

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Brad',//đặt tên thuộc tính nếu có nhiều từ thì phải thêm dấu ' '
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
