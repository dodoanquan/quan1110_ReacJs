// 1)scope là nơi lưu trữ biến, khai báo biến , phạm vi hoạt động của biến, obj, function
// - Global scope : là những biến nằm ngoài function scope
// -local scope : 
// +) function scope : chỉ nằm trong function
// +) block scope (es6): nằm trong {}, if, swithc
// 2)lexical scope : function lồng cha con
function b(){
	function a(){
		a = 10;
	return;
	}
}
b()
console.log(a)