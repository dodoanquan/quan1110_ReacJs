// Bài 5:
// - Input: Cho 1 chuỗi
// - Output: In ra chuỗi đảo ngược
function reverse(str) {
	let newReverse = ""
	for ( let i = str.length-1 ; i >= 0 ; i--) {
		newReverse += str[i]
	}
	console.log(`${newReverse}`)
}
reverse("look at me!")