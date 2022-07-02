// Bài 1: Sử dụng forEach để lấy first_name và last_name của tất cả người dùng và đặt
// nó vào một mảng khác. Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng
const users = require('./data.json')
const allFirstAndLastName = []
users.forEach((item) => {
    const firstNameLastName = `${item.first_name} ${item.last_name}`
    allFirstAndLastName.push(firstNameLastName)
})
console.log( allFirstAndLastName)






