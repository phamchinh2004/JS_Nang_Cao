let d;

// Get today's date and time
d = new Date();//gán đối tượng date cho biến 'd'
console.log(d);
// Set to a string
d = d.toString();//Chuyển biến d thành chuỗi
console.log(d);
// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);//Năm-tháng-ngày-giờ-phút-giây
console.log(d);
// Pass in a string
d = new Date('2021-07-10T12:30:00');//Năm-tháng-ngày-giờ-phút-giâys
console.log(d);
d = new Date('07/10/2021 12:30:00');//Tháng-ngày-năm-giờ-phút-giây
console.log(d); 
d = new Date('2022-07-10');//Năm-tháng-ngày
console.log(d);
d = new Date('07-10-2022');//Tháng-ngày-năm
console.log(d);

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();//Trả về thời điểm hiện tại dưới dạng số lượng miligiây
const date=new Date(d);//sử dụng đối tượng Date và truyền số miligiây vào
console.log(date);

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();//Giống Data.now()
d = d.valueOf();//Giống Data.now()

// Create a date from a timestamp
d = new Date(1666962049745);//truyền số miligiây vào đối tượng Date

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);
//Date.now() trả về số miligiây, và sau đó, phép chia cho 1000 được thực hiện để chuyển đổi từ miligiây sang giây
//Math.floor() làm tròn xuống để lấy phần nguyên.
console.log(d);
