// Viết một hàm gọi là displayName () lấy một đối tượng làm đối số và in ra họ và tên của người đó.
 // Sử dụng cấu trúc đối tượng trong đối số hàm.
// Data Test:
user = {
    ho : 'do',
    ten : 'quan'
}
function displayName(x = {}) {
    return console.log(x.ho, x.ten)
}
displayName(user);