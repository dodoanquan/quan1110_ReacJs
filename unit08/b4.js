// Bài 4: Sử dụng map để chuyển đổi key của object thành camelCase
const users = require('./data.json')
const resultMap = characters.map((item) => {
	return {
		'id': users.id,
		'firstName': users.first_name,
		'lastName': users.last_name,
		'email': users.email,
		'gender': users.gender,
		'age': users.age,
		'salary': users.salary
	}
})
console.log(resultMap)