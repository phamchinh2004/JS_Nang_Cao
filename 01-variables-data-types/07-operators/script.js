// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation - Nối
x = 'Hello' + ' ' + 'World';

// Exponent - Số mũ
x = 2 ** 3;

// Increment - Tăng lên 1 giá trị
x = 1;
// x = x + 1;
x++;

// Decrement - Giảm đi một giá trị
// x = x - 1;
x--;

// 2. Assignment Operators - Toán tử gán

x = 10;

x += 5;//Tăng thêm 5
x -= 5;//Giảm đi 5
x *= 5;//Nhân với 5
x /= 5;//Chia cho 5
x %= 5;//Chia cho 5 lấy dư
x **= 5;//Mũ 5

// 3. Comparison Operators

// Equal to (Just the value, not the type) So sánh bẳng nhau (chỉ giá trị)
x = 2 == '2';

// Equal to (Type and value) So sánh bẳng nhau (cả giá trị và kiểu dữ liệu)
x = 2 === '2';

// Not equal to (Just the value, not the type) So sánh khác nhau (chỉ giá trị)
x = 2 != '2';

// Not equal to (Type and value)So sánh khác nhau (cả giá trị và kiểu dữ liệu)
x = 2 !== 2;

// Greater than and less than - Lớn hơn và nhỏ hơn
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
