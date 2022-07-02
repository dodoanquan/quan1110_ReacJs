// Bài 7: Sắp xếp theo firstName và salary
const users = require('./data.json')
const newFirstName =  users
const newSalary = users

newSalary.sort((a, b) => {
  if (a.salary.toLowerCase() > b.salary.toLowerCase()) return 1
  else if (a.salary === b.salary) return 0
  return -1
})
console.log(newSalary)

newFirstName.sort((a, b) => {
	if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1
	else if (a.first_name === b.first_name) return 0
	return -1
})
console.log(newFirstName)


