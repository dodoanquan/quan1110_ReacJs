// Bài 2: Tìm user là male và có tuổi dưới 40
const users = require('./data.json')
// console.log(users.filter((item) => {
// 	return item.gender.toLowerCase() === "male" &&
// 	item.age < 40
// }))
const result = users.filter(({age, gender}) => {
	return age < 40 && gender.toLocaleLowerCase() == "male"
})
console.log(result)


