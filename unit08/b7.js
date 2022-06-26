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
// Bài 7: Sắp xếp theo firstName và salary
const salary = characters.sort((a,b) => {
	return a.salary - b.salary
})
console.log(salary)

const firstName = characters.sort((a, b) => {
	if(a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
		return 1
	}else {
		return -1
	}
})
console.log(firstName)


