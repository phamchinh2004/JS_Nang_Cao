let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);//Thêm giá trị vào cuối mảng
console.log(arr);

// pop() - Take the last value off
arr.pop();//Bỏ giá trị cuối mảng
console.log(arr);

// unshift() - Add a value to the beginning of the array
arr.unshift(99);//Thêm giá trị vào đầu mảng
console.log(arr);

// shift() - Remove first value
arr.shift();//Xóa giá trị đầu của mảng
console.log(arr);

// reverse() - Reverse an array
arr.reverse();//Đảo ngược mảng
console.log(arr);

// includes() - Check to see if something is in the array
x = arr.includes(445);//Kiểm tra xem số 445 có trong mảng không

// indexOf() - Return the index of the first match
x = arr.indexOf(28);//Trả về vị trí của số 28
console.log(x);
// Return array as a string - Chuyển thành dạng chuỗi
x = arr.toString();
x = arr.join();
console.log(x);

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);//Trả về các phần tử từ vị trí thứ 1 đến trước 4 (3)
console.log(x);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);//loại bỏ 4 phần từ từ vị trí phần tử index thứ 1 trở đi
console.log(x);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);//Loại bỏ 1 phần tử từ vị trí phần tử index thứ 4 trở đi
console.log(x);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);