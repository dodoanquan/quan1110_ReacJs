// Bài 1:
// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng
// - Input: Cho cân nặng, chiều cao của 2 người
// - Output:
// + Tính BMI của từng người
// + Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì
// Data test:
// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m
function bmi(a, b) {
	return a / (b * b);
}
var bmiMarks = bmi(78, 1.69);
var bmiJohn = bmi(92, 1.95);
if (bmiMarks > bmiJohn) {
	console.log( `Marks BMI ${bmiMarks} is higher than John BMI ${bmiJohn} `)
}else if (bmimMarks < bmiJohn) {
	console.log( `John BMI ${bmiJohn}  is higher than Marks BMI ${bmiMarks} `)
}else {
	console.log( `BMI of two people is the same`)
}

