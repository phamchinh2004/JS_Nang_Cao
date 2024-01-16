let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);//Bây giờ fruits là mảng 2 chiều
console.log(fruits);
// Now we can access 'blueberry' with the following
x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];
console.log(allFruits);

x = allFruits[1][2];
console.log(x);

// concat() - Concatenate arrays
x = fruits.concat(berries);//Nối mảng (lấy giá trị của 2 mảng nối vào nhau, bây giờ x chứa các giá trị của 2 mảng)
console.log(x);
// spread operator (...) - Concatenate with
x = [...fruits, ...berries];//Nối mảng (lấy giá trị của 2 mảng nối vào nhau, bây giờ x chứa các giá trị của 2 mảng) giống với concat
console.log(x);

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();//Làm phẳng một mảng -> biến thành mảng 1 chiều
console.log(x);

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);//Kiểm tra xem có phải là mảng không
console.log(x);

// from() - Create an array from an array like value
x = Array.from('12345');//Output: ['1','2','3','4','5']
console.log(x);

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);//Output: [1,2,3]
x=x.map(String);//Chuyển mảng các số thành mảng các chuỗi
console.log(x);