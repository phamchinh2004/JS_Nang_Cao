let x;
let d = new Date();

// Date methods

x = d.toString();//Chuyển thành chuỗi

x = d.getTime();//Trả về thời điểm hiện tại dưới dạng số lượng miligiây
x = d.valueOf();//Trả về thời điểm hiện tại dưới dạng số lượng miligiây

x = d.getFullYear();//Trả về năm

x = d.getMonth();//Trả về tháng giá trị từ 0-11
x = d.getMonth() + 1;//Trả về tháng giá trị từ 1-12

x = d.getDate();//Trả về ngày

x = d.getDay();//Trả về số nguyên biểu diễn ngày trong tuần
//Giá trị trả về là một số từ 0 đến 6, trong đó 0 là Chủ Nhật, 1 là Thứ Hai, ..., 6 là Thứ Bảy.

x = d.getHours();//Trả về giờ

x = d.getMinutes();//Trả về phút

x = d.getSeconds();//Trả về giây

x = d.getMilliseconds();//Trả về mini giây

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);
// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
//định dạng một đối tượng Date thành một chuỗi ngày tháng theo định dạng tiêu chuẩn của khu vực 'en-US' (Tiếng Anh - Hoa Kỳ).
console.log(x);

x = Intl.DateTimeFormat('en-GB').format(d);
//định dạng một đối tượng Date thành một chuỗi ngày tháng theo định dạng tiêu chuẩn của khu vực 'en-GB' (Tiếng Anh - Vương quốc Anh).
console.log(x);

x = Intl.DateTimeFormat('default').format(d);
//định dạng một đối tượng Date thành một chuỗi ngày tháng mặc định.
console.log(x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);//hiển thị đầy đủ tên của tháng. VD: tháng -> Output: tháng
console.log(x);
x = d.toLocaleString('default', { month: 'short' });//hiển thị ngắn gọn tên của tháng. VD: tháng -> Output: thg

x = d.toLocaleString('default', {
  weekday: 'long',//hiển thị đầy đủ tên của thứ
  year: 'numeric',//hiển thị số của năm
  month: 'long',//hiển thị đầy đủ tên của tháng
  day: 'numeric',//hiển thị số của ngày
  hour: 'numeric',//hiển thị số của giờ
  minute: 'numeric',//hiển thị số của phút
  second: 'numeric',//hiển thị số của giây
  timeZone: 'America/New_York',//lấy thời gian của khu vực
});
console.log(x);
