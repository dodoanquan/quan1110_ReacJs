// Bài 4:
// - Input: Cho 1 mảng
// - Output: Tìm số lần xuất hiện của các phần tử trong mản
function count(array,x) {
	var x;
	let count = 0 ;
	for(let i = 0 ; i < array.length ; i++){
		if(array[i] == x) {
			count ++;
		}
	}
	console.log(`${x} xuat ${count} hien`)
}
count(["a", "b", "c", "a","a" ,"a" , 7, 4, 9, 8 ], "a")