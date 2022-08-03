// Bài 3: Tạo một đối tượng Student có các phương thức sau

// - Trung bình cộng của điểm các môn

// - Xếp loại của học sinh

// - Tổng số tiền học phải đóng


function Student(average,evaluate,total){
	this.average = average;
	this.evaluate = evaluate;
	this.total = total;

}

// class Student{
// 	constructor(average,evaluate,total){
// 		this.average = average;
// 		this.evaluate = evaluate;
// 		this.total = total;
// 	}
// }

const result = new Student(10,"good", "100$")

console.log(result)
