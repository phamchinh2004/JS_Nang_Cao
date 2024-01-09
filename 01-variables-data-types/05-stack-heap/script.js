// Value is stored in the stack
//Giá trị được lưu trữ trên stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
//Tham chiếu được lưu trữ trên heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;// 'newName' giờ đây giữ giá trị 'John'.
newName = 'Jonathan';// 'newName' giờ đây giữ giá trị 'Jonathan' nhưng 'name' vẫn giữ giá trị là 'John'.

let newPerson = person; //'newPerson' giờ đây trỏ đến cùng một đối tượng trên heap với 'person'.
newPerson.name = 'Bradley';// newPerson.name được gán lại giá trị 'Bradley' và person.name giờ đây cũng sẽ là Bradley

console.log(name, newName); // John, Jonathan 
//name được khai báo và gán giá trị 'John'.
//newName được khởi tạo và gán giá trị của name (newName = name;), nó giờ đây giữ giá trị 'John'.
//Sau đó, newName được gán lại giá trị 'Jonathan', tuy nhiên điều này không ảnh hưởng đến giá trị của name. 
//Cả name và newName giữ giá trị nguyên thủy 'John' và 'Jonathan' tương ứng.

console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 } 
//person là một đối tượng được khai báo và gán giá trị { name: 'Brad', age: 40 }.
//newPerson được khởi tạo và gán giá trị của person (newPerson = person;), nó giờ đây trỏ đến cùng một đối tượng trên heap với person.
//newPerson.name được gán lại giá trị 'Bradley', và điều này ảnh hưởng đến person.name vì cả hai đều tham chiếu đến cùng một đối tượng. 
//Do đó, person.name và newPerson.name giờ đều là 'Bradley'.