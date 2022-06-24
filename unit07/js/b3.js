// Bài 3:
// - Input: Cho 1 mảng
// - Tính tổng mảng đó (dùng for, reduce …. Tất cả các cách để tính tổng mảng đó)
function sum(array = []){
	let sum1 = 0;
	let sum2 = 0;
	let sum3 = 0;
	let x = 0;
	for (let i = 0; i < array.length; i++) {
		sum1 = sum1 + array[i]
	}

	while (x < array.length) {
		sum2 = sum2 + array[x]
		x++;
	}
	array.forEach(myFunction);
	function myFunction(item) {
		sum3 = sum3 + item;
	}
	console.log(`${sum1} khi dung for`)
	console.log(`${sum2} khi dung while`)
	console.log(`${sum3} khi dung forEach`)
}
sum([1, 2, 3, 5]);