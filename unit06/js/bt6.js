// Bài 6: Tìm xếp loại điểm của học sinh
// - Input: Cho vào tên học sinh, và điểm số của học sinh đó
// - Output: Tìm xếp loại hạnh kiểm và in ra dưới dạng Tên_học_sinh xếp loại loại_điểm_của_học_sinh
// Xếp loại điểm như sau:
// + 90 <= điểm <= 100: Loại S
// + 80 <= điểm < 90: Loại A
// + 70 <= điểm < 80: Loại B
// + 60 <= điểm < 70: Loại C
// + 50 <= điểm < 60: Loại D
// + 40 <= điểm < 50: Loại E
// + 0 <= điểm < 40: Bạn không được lên lớps

function evaluate(name, point){
	if (point <= 100 && point >= 90) {
		console.log(`${name} loai S`)
	} else if (point<90 && point >= 80) {
		console.log(`${name} loai A`)
	} else if (point<80 && point >= 70) {
		console.log(`${name} loai B`)
	} else if (point<70 && point >= 60) {
		console.log(`${name} loai C`)
	} else if (point<60 && point >= 50) {
		console.log(`${name} loai D`)
	} else if (point<50 && point >= 40) {
		console.log(`${name} loai E`)
	} else {
		console.log(`${name} khong duoc len lop`)
	}
}
evaluate("quan", 100)