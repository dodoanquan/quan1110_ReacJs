// Viết một hàm gọi là displayName () lấy một đối tượng làm đối số và in ra họ và tên của người đó.
 // Sử dụng cấu trúc đối tượng trong đối số hàm.
// Data Test:
user = {
    ho : 'do',
    ten : 'quan'
}
function displayName({ho, ten}) {
    return `${ho} ${ten}`
}
console.log(displayName(user))