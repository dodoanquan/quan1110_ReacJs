// Bài 3:
// Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng 3 lần khác.
// Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!
// Yêu cầu:
// - Tính điểm trung bình của mỗi đội
// - So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi và in ra đội chiến thắng.
// Đừng quên rằng có thể có một trận hòa, vì vậy hãy kiểm tra điều đó (hòa có nghĩa là họ có cùng điểm trung bình)
// - Yêu cầu về số điểm tối thiểu là 100. Với quy tắc này, một đội chỉ thắng nếu có số điểm cao hơn
// đội còn lại, đồng thời phải đạt ít nhất 100 điểm. Với yêu cầu này hãy tìm đội thắng. Nếu không có đội thắng hãy in ra thông báo hợp lệ (Không có đội thắng cuộc)
// - Điểm số tối thiểu cũng áp dụng cho một trận hòa! Vì vậy kết quả hòa chỉ xảy ra khi cả hai đội có số điểm
// bằng nhau và cả hai đều có số điểm lớn hơn hoặc bằng 100 điểm. Nếu không, không đội nào giành được cúp
// Data test:
// + Data 1: Dolphins có điểm là 96, 108 và89. Koalas có điểm là 88, 91 và 110
function diemTrungBinh(a, b, c){
	return (a + b + c) / 3;
}
var pointA = diemTrungBinh(96, 108, 89);
var pointB = diemTrungBinh(88, 91, 110);
//a DIEMTRUNGBINH
console.log(`Diem trung binh cua Dolphin la ${pointA}`)
console.log(`Diem trung binh cua Koala la ${pointB}`)
//b
if (pointA > pointB) {
	console.log( `Dolphins la doi chien thang`)
}else if (pointA < pointB) {
	console.log( `Koalas la doi chien thang`)
}else {
	console.log( `2 doi hoa nhau`)
}
// c vs d
if (pointA > pointB && pointA >= 100) {
	console.log( `Dolphins la doi chien thang`)
}else if (pointB > pointA && pointB >=100){
	console.log( `Koalas la doi chien thang`)
}else if (pointA == pointB && pointB >=100){
	console.log( `2 doi hoa nhau`)
}else{
	console.log( `Khong co doi thang cuoc`)
}