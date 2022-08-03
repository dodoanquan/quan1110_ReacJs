// Bài 2:

// - Input: Mảng các số

// - Output: Tính hiệu các số nguyên tố( số nguyên tố là số lớn hơn 1 và chia hết cho 1 và chính nó => >=2)

function find(arr){
	let newArr = [];
	arr.forEach( function(number) {
		let count = 0;
		for(let i = 0; i <= number ; i++){
			if((number % i) === 0 ){
				count++
			}
		}
		if(count === 2){
			newArr.push(number)
		}
	});
	console.log(newArr)

	const result = newArr.reduce((prev,cur) => {
		 return prev -= cur
	},0)
	console.log(result)
}


find([1,2, 3, 4, 5, 6, 7, 8, 9])
// 2, 3, 5, 7