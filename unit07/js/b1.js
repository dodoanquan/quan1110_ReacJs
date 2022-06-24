function count(text) {
	let lowerCase = text.toLowerCase();
	let countVowel = 0;
	for (let i of lowerCase) {
		if (i.includes('a') ||
			i.includes('e') ||
			i.includes('i') ||
			i.includes('o') ||
			i.includes('u')) {
			countVowel ++;
		}
	}
	console.log(` Co ${countVowel} nguyen am`)
}
count("no");
count("Look at me");
count("nnnnnnnnnnnnnnnnnn");
count("noway");

