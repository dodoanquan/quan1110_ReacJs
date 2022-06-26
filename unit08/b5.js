// Dùng reduce để làm từ bài 1 -> bài 4
const characters = [
 {
    "id": 1,
    "first_name": "Eamon",
    "last_name": "Harhoff",
    "email": "eharhoff0@imageshack.us",
    "gender": "Male",
    "age": 76,
    "salary": 18888
  },
  {
    "id": 2,
    "first_name": "Laney",
    "last_name": "Whittam",
    "email": "lwhittam1@issuu.com",
    "gender": "Female",
    "age": 42,
    "salary": 15018
  },
  {
    "id": 3,
    "first_name": "Lynett",
    "last_name": "Twinberrow",
    "email": "ltwinberrow2@gov.uk",
    "gender": "Female",
    "age": 99,
    "salary": 13343
  },
  {
    "id": 4,
    "first_name": "Madella",
    "last_name": "Kliesl",
    "email": "mkliesl3@ft.com",
    "gender": "Female",
    "age": 56,
    "salary": 5248
  },
  {
    "id": 5,
    "first_name": "Simona",
    "last_name": "Knee",
    "email": "sknee4@sciencedaily.com",
    "gender": "Female",
    "age": 61,
    "salary": 14376
  },
  {
	"id": 6,
	"first_name": "do",
	"last_name": "quan",
	"email": "dodoanquan1110@gmail.com",
	"gender": "Male",
	"age": 22,
	"salary": 14378
},
];
// let firstName = [];
// let lastName = [];
// let user = [];
// characters.reduce((preValue, currentValue) => {
// 	return firstName.push(currentValue.first_name),
// 	lastName.push(currentValue.last_name)
// }, 0)
// console.log(firstName)
// console.log(lastName)

// characters.reduce((preValue, currentValue) => {
// 	return (currentValue.gender == "Male" &&
// 	currentValue.age < 40)
// 	? user.push(currentValue)
// 	: false
// },0)
// console.log(user)


let obj = [];
characters.reduce((preValue, currentValue) => {
	return obj.push({
		'id': currentValue.id,
		'firstName': currentValue.first_name,
		'lastName':currentValue.last_name,
		'email': currentValue.email,
		'gender': currentValue.gender,
		'age': currentValue.age,
		'salary': currentValue.salary
	})
},0)
console.log(obj)