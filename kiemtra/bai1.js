// Bài 1:
// - Input: Mảng các số
// - Output: Tính trung bình cộng của các số chia hết cho2


const arr = [-1, -2, -3, -4, -5, 5, 6, 7, 8]
let sum = 0;
const newArr = arr.filter((number) => number % 2 ===0)
newArr.forEach((number)=> (sum+= number))
console.log(sum/newArr.length)

let count = 0;
const resultOne = arr.reduce((preValue, currentValue) =>{
	if(currentValue %2 === 0) {
		++count;
		preValue += currentValue
	}
	return preValue;
},0)
console.log(resultOne/count)

