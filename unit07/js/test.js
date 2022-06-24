// let oldName = 'user_name'
// let change =  oldName.split("_");
// let newName = change[0].charAt(0).toUpperCase()+change[0].slice(1) + change[1].charAt(0).toUpperCase()+change[1].slice(1);
// console.log(newName);


// charAt: lấy kí tự đầu
// slice(x): lấy 1 chuỗi;
// slice(start,end)


// function upercaseText(name) {
//   return name.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(upercaseText("quan"));


// const str = 'quan';
// function newName() {
//     console.log(str[0].toUpperCase() + str.slice(1));
// }
// newName();

function covertToUpperCase(text){
	return text.charAt(0).toUpperCase()+text.slice(1);
}
function revert(str = ""){
	let newStr = "";
	for(let i of str.split("_")){
		newStr += covertToUpperCase(i)
	}
	console.log(newStr)
}
revert("u_aa_pp")


