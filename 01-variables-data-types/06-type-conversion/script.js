let amount = '1hello';

// Convert string to number
amount = parseInt(amount);  //console.log(amount);
amount = +amount;   //console.log(amount);
amount = Number(amount);    //console.log(amount);
//Cả 3 cách trên đều lấy giá trị số trong biến amount, nếu không có giá trị số thì trả về NaN
// amount = '1hello';
// Convert number to string
amount = amount.toString(); console.log(amount,typeof(amount));
amount = String(amount); console.log(amount,typeof(amount));
//Cả 2 cách trên chuyển giá trị thành chuỗi, nếu là số thì cũng chuyển thành chuỗi
// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);
//Nếu giá trị của amount là falsy (ví dụ: 0, "", null, undefined, NaN), thì sau chuyển đổi, amount sẽ có giá trị false.
//Nếu giá trị của amount là truthy (bất kỳ giá trị khác ngoài những giá trị falsy), thì sau chuyển đổi, amount sẽ có giá trị true.

// Ways to get NaN - Các cách để lấy NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
console.log(amount, typeof amount);