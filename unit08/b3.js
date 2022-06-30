// Bài 3: Làm giống bài 1 nhưng sử dụng map
// Lấy first_name và last_name của tất cả người dùng và đặt
// nó vào một mảng khác. Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng
const users = require('./data.json')
// const resultMap = users.map((item) => {
// 	return `${item.first_name} ${item.last_name}`
// })
// console.log(resultMap)
const resultMap = users.map(({first_name, last_name }) => {
  return `${first_name} ${last_name}`
})
console.log(resultMap)
