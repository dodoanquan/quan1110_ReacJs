// Bài 5: Thực hiện các phép tính số học trên hai số
// - Input (đầu vào): Cho 2 số và phép tính cần thực hiện
// + add: cộng ( + )
// + subtract: trừ ( - )
// + multiply: nhân ( * )
// + divide: chia hết ( / )
// + modulus: Chia lấy dư ( % )
// - Output (đầu ra): Thực hiện phép tính với hai số
// + Data 1: a = 78, b = 97, op (phép tính): add
function inPut(a, b , calc){
	if (calc == "add") {
		console.log(`Ket qua la ${a + b}`);
	} else if (calc == "subtract") {
		console.log(`Ket qua la ${a - b}`);
	} else if (calc == "muliply") {
		console.log(`Ket qua la ${a * b}`);
	} else if (calc == "divide") {
		console.log(`Ket qua la ${a / b}`);
	} else if (calc == "modulus") {
		console.log(`Ket qua la ${a % b}`);
	}else{
		console.log("none");
	}
}
inPut(78, 97, "add");
inPut(87, -99, "subtract");
inPut(679, 5, "muliply");
inPut(54, 3, "divide");
inPut(223, 78, "modulus");
