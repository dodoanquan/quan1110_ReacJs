// Bài 2:
// - Input: Cho 1 object
// - Output: Viết hàm kiểm tra xem object đó rỗng không
function checkObj (obj = {}){
	if (Object.entries(obj).length === 0) {
		console.log("Obj rong")
	}else{
		console.log(`Obj khong rong`)
	}
}
checkObj ({name:"quan", point : "10"});
checkObj({});
