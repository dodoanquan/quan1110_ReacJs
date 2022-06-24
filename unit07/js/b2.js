function checkObj (obj = {}){
	if (Object.entries(obj).length === 0) {
		console.log("Obj rong")
	}else{
		console.log(`Obj khong rong`)
	}
}
checkObj ({name:"quan", point : "10"});
checkObj({});
