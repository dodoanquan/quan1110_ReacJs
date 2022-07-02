// Dùng reduce để làm từ bài 1 -> bài 4
const users = require('./data.json')

const resultAllFirstLastName = users.reduce((preValue, currentValue) => {
	preValue.push(`${currentValue.first_name} ${currentValue.last_name}`)
  return preValue;
}, [])
console.log(resultAllFirstLastName)

const resultAgeGender = users.reduce((preValue, currentValue) => {
	if(currentValue.age < 40 && currentValue.gender.toLowerCase() === "male" ){
    preValue.push(currentValue)
  }
  return preValue;
}, [])
console.log(resultAgeGender)

const resultNewObj = users.reduce((preValue, currentValue) => {
	preValue.push({
		'id': currentValue.id,
		'firstName': currentValue.first_name,
		'lastName':currentValue.last_name,
		'email': currentValue.email,
		'gender': currentValue.gender,
		'age': currentValue.age,
		'salary': currentValue.salary
	})
  return preValue;
},[])
console.log(resultNewObj)