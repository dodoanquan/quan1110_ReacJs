function reverse(str) {
	let newReverse = ""
	for ( let i = 0 ; i < str.length ; i++) {
		newReverse += str[str.length - i - 1]
	}
	console.log(`${newReverse}`)
}
reverse("look at me!")