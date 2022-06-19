// MARKS VS JOHN // MARRY vs HARRY
const marks = "MARKS";
const heightMarks = 78;
const massMarks = 169;
const BMIMarks = massMarks/(heightMarks*heightMarks);

const john = "JOHN";
const heightJohn = 92;
const massJohn = 195;
const BMIJohn = massJohn/(heightJohn*heightJohn);

const marry = "MERRY";
const heightMerry = 95;
const massMerry = 188;
const BMIMerry = massMerry/(heightMerry*heightMerry);

const harry = "HARRY";
const heightHarry = 85;
const massHarry = 176;
const BMIHarry = massHarry/(heightHarry*heightHarry);

// TINH BMI
console.log( `chi so BMI cua Marks la ${BMIMarks}`)
console.log( `chi so BMI cua John la ${BMIJohn}`)
console.log( `chi so BMI cua Merry la ${BMIMerry }`)
console.log( `chi so BMI cua Harry la ${BMIHarry}`)

// SO SANH
if (BMIMarks > BMIJohn) {
	console.log( `${marks} BMI (${BMIMarks}) is higher than ${john} BMI (${BMIJohn})`)
}else if(BMIMarks < BMIJohn){
	console.log( `${john} BMI (${BMIJohn}) is higher than ${marks} BMI (${BMIMarks})`)
}else{
	console.log( `${john} BMI (${BMIJohn}) is equal to the ${marks} BMI (${BMIMarks})`)
}

if (BMIMerry > BMIHarry) {
	console.log( `${marry} BMI (${BMIMerry}) is higher than ${harry} BMI (${BMIHarry})`)
}else if(BMIMerry  < BMIHarry){
	console.log( `${harry} BMI (${BMIHarry}) is higher than ${marry} BMI (${BMIMerry})`)
}else{
	console.log( `${harry} BMI (${BMIHarry}) is equal to the ${marry} BMI (${BMIMerry})`)
}

