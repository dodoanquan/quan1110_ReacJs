// B1: convert number => string
const number = 123;
// const strOne = number + '';
const strTwo = `${number}`;
// B2 Lấy kí tự cuối của chuỗi vừa rồi
const finalCharacter = strTwo.slice(-1);
// B3: Chuyển kí tự vừa cắt sang number để so sánh
// B4 ktra 0 2 4 6 8
if (finalCharacter * 1 == 0 ||
	finalCharacter * 1 == 2 ||
	finalCharacter * 1 == 4 ||
	finalCharacter * 1 == 6 ||
	finalCharacter * 1 == 8) {
	console.log(`${number} la so chan`)
} else {
	console.log(`${number} la so le`)
}
