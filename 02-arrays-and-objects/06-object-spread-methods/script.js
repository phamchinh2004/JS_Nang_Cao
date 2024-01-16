let x;

// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// Object Nesting
const person = {//person: Đối tượng chính.
  address: {//address: Đối tượng mô tả địa chỉ.
    coords: {//coords: Đối tượng mô tả tọa độ địa lý.
      lat: 42.9384,//lat: Thuộc tính chứa giá trị vĩ độ (latitude).
      lng: -71.3232,//lng: Thuộc tính chứa giá trị kinh độ (longitude).
    },
  },
};

x = person.address.coords.lat;

const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  c: 3,
  d: 4
};

// Spread operator
const obj3 = { ...obj1, ...obj2 };//1,2,3,4
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);//Được sử dụng để tạo một đối tượng mới bằng cách sao chép các thuộc tính từ obj1 và obj2 vào đối tượng mới
//{}: Đối tượng trống là đối tượng mục tiêu (target) mà chúng ta sẽ sao chép dữ liệu vào.
//obj1: Các thuộc tính của obj1 được sao chép vào đối tượng mục tiêu.
//obj2: Các thuộc tính của obj2 được sao chép vào đối tượng mục tiêu. Nếu có trùng tên thuộc tính với obj1, giá trị từ obj2 sẽ ghi đè lên giá trị từ obj1.

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];//định nghĩa một mảng có tên todos, chứa ba đối tượng đại diện cho danh sách công việc cần làm (todos). 
//Mỗi đối tượng trong mảng đều có hai thuộc tính: id và name.

x = todos[0].name;//Truy cập thuộc tính của đối tượng ở vị trí 0 của mảng todos

// Get array of object keys
x = Object.keys(todo);// trả về một mảng chứa tất cả các khóa (keys) của đối tượng đó.
// const todo = {
//   id: 1,
//   name: 'Buy Milk',
// };

// const keys = Object.keys(todo);
// console.log(keys);
// Output: ['id', 'name']

// Get length of an object
x = Object.keys(todo).length;//Trả về độ dài của đối tượng
// Output: 2

// Get array of object values
x = Object.values(todo);//trả về một mảng chứa tất cả các giá trị của các thuộc tính trong đối tượng todo.
// Output: [1, 'Buy Milk']

// Get array of object key/value pairs
x = Object.entries(todo);//trả về một mảng chứa các cặp key-value của đối tượng todo dưới dạng mảng con.
// Output: [['id', 1], ['name', 'Buy Milk']]

// Check if object has a property
x = todo.hasOwnProperty('age');//trả về giá trị của x là true nếu thuộc tính 'age' tồn tại trong đối tượng todo, và false nếu không tồn tại.

console.log(x);