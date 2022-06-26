// Bài 3: Làm giống bài 1 nhưng sử dụng map
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
];
// Lấy first_name và last_name của tất cả người dùng và đặt
// nó vào một mảng khác. Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng
const resultMap = characters.map((item, index) => {
	return {
		'firstName': item.first_name,
		'lastName': item.last_name
	}
})
console.log(resultMap)