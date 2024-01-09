let x;

const name = 'John';
const age = 31;

// Concatenation (Nối) - cách nối thứ 1
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals - cách nối thứ 2
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('Hello World');
//Vì s là một đối tượng của lớp String, nó có thể sử dụng các phương thức và thuộc tính mà đối tượng chuỗi cung cấp. Ví dụ: s.length, s.charAt(0),...
x = typeof s; console.log(x);

x = s.length; console.log(x);

// Access value by key
x = s[0];

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Change case
x = s.toUpperCase(); //Chuyển thành chữ hoa
x = s.toLowerCase(); //Chuyển thành chữ thường

// charAt() - returns the character at the specified index
x = s.charAt(0); // Lấy phần tử ở vị trí chỉ định

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d');  //tìm vị trí của từ khóa chỉ định
x = s.indexOf('d',5);  //tìm vị trí của từ khóa chỉ định kể từ vị trí được chỉ định

// substring() - search a string for a specified value
x = s.substring(2, 5);//Trích xuất từ vị trí thứ 2 đến vị trí thứ 5 (không bao gồm 5)
x = s.substring(7);//Trích xuất từ vị trí thứ 7 đến hết

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);//Lấy từ vị trí thứ 11 (không bao gồm 11) tính từ cuối chuỗi lên vị trí thứ 6 tính từ cuối chuỗi

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim();//Loại bỏ khoảng trắng

// replace() - replace all instances of a string
x = s.replace('World', 'John'); //Thay thế chuỗi con, Output: Hello John

// includes() - returns true if the string is found
x = s.includes('Hell'); //Trả về true nếu tìm thấy trong chuỗi

// valueOf() - returns the primitive value of a variable
x = s.valueOf(); // Trả về giá trị nguyên thủy của một đối tượng
console.log(x);
const sinhVien={
    name:"Phạm Chình",
    age:19,
    address:"Thái Bình",
    valueOf:function(){
        return this.age;
    }
}
console.log(sinhVien.valueOf());
console.log(Number(sinhVien));
// split() - returns an array of strings
x = s.split(' ');//Chia chuỗi ra thành mảng, nếu không có gì trong ngoặc thì mặc định là khoảng trắng
console.log(x);
