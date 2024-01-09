let x;

const num = new Number(536.1284);

// toString() - returns a string representation of the number
x = num.toString();
console.log(x);
// To get the length
x = num.toString().length;//Chuyển đổi thành chuỗi và lấy độ dài của chuỗi tính từ 1
console.log(x);

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);//Làm tròn số với số lượng số được chỉ định sau dấu thập phân
console.log(x);
// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);//Trả về số với độ dài được chỉ định tính từ 0
console.log(x);
// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);//Phương thức này dành cho đối tượng số ('Number'), khá giống với toFixed()
console.log(x);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');
console.log(x);//Phương thức này dành cho đối tượng số ('Number')
// Chuyển đổi số thành chuỗi với định dạng số hóa

// valueOf - Get value
x = num.valueOf();//Lấy giá trị
console.log(x);
// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;//Trả về số lớn nhất
console.log(x);

x = Number.MIN_VALUE;//Trả về số nhỏ nhất
console.log(x);