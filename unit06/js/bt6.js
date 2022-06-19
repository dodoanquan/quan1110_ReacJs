const name = "quan"
const point = 95;
if(point <= 100 && point >= 90){
	console.log(`${name} loai S`)
}else if(point<90 && point >= 80){
	console.log(`${name} loai A`)
}else if(point<80 && point >= 70){
	console.log(`${name} loai B`)
}else if(point<70 && point >= 60){
	console.log(`${name} loai C`)
}else if(point<60 && point >= 50){
	console.log(`${name} loai D`)
}else if(point<50 && point >= 40){
	console.log(`${name} loai E`)
}else{
	console.log(`${name} khong duoc len lop`)
}