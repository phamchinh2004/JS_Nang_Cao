// Log number
// Hiển thị số, giống echo trong php
console.log(100);

// Log string
// Hiển thị chuỗi, giống echo trong php
console.log('Hello World');

// Log multiple values
// Hiển thị nhiều kiểu giá trị (số, chuỗi, boolean)
console.log(20, 'Hello', true);

// Log a variable
// Hiển thị biến
const x = 100;
console.log(x);

// Console error & warning
// Hiển thị lỗi và cảnh báo
console.error('Alert');//Lỗi
console.warn('Warning');//Cảnh báo

// Log object as table
// Hiển thị đối tượng kiểu table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

//Kiểu nhóm có mở và đóng có tên là simple
// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
// "%c" là mọi phần của chuỗi sau của %c sẽ được định dạng theo các kiểu styles đã được cung cấp sau đó
const styles = 'padding: 10px; background-color: white; color: green;font-weight: bold;';
console.log('%cHello World', styles);