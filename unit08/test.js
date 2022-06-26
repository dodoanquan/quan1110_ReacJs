// const arr = [1, 2, 3, 4]
// push : thêm item vào cuối array
// arr.push('quan')  /* =  5 -> arr = [1, 2, 3, 4, 'quan'] */
// shift : loại bỏ item đầu tiên trong array
// arr.shift() /* = 1 -> arr = [2, 3, 4, 'quan'] */
// pop : Xóa item cuối cùng trong array
// arr.pop()  /* = quan -> arr = [2, 3, 4] */
// unshift : sẽ giúp ta thêm một hoặc nhiều phần tử vào vị trí đầu mảng, sau đó trả về chiều dài của mảng sau khi thêm
// arr.unshift(5) /* = 4 -> arr = [5, 2, 3, 4] */
// push :sẽ giúp ta thêm một hoặc nhiều phần tử vào vị trí cuối mảng, sau đó trả về chiều dài của mảng sau khi thêm
// arr.unshift(10) /* = 5 -> arr = [5, 2, 3, 4, 10] */
// reduce :Reduce là một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của
// mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.
// Vd: Tính tổng các số trong mảng chia hết cho 2 , và không chia hết cho 2
let arr = [1, 2, 3, 4]
console.log(arr.reduce((preValue, currentValue) => {
	return currentValue % 2 === 0
	? preValue + currentValue
	: preValue
}, 0))
// - Không truyền initialValue : preValue = arr[0]
// - truyền initialValue : preValue = initialValue
// 0: preValue, curentValue => preValue = 0 , currentValue = 1 => 0
// 1: preValue, curentValue => preValue = 0 , currentValue = 2 => 2
// 2: preValue, curentValue => preValue = 2 , currentValue = 3 => 2
// 3: preValue, curentValue => preValue = 2 , currentValue = 4 => 6
const sumOdd = arr.reduce((preValue, currentValue) =>{
	if(currentValue % 2 === 1) {
		preValue += currentValue
	}
	return preValue;
},0 )
console.log(sumOdd)
// Vd2: Tính tổng khối lượng và chiều cao của mọi người
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
const totalHeight = characters.reduce(function(preValue, currentValue) {
	return +preValue + (+currentValue.height)
}, 0)
console.log(`tong chieu cao la ${totalHeight}`)


const totalHeightMass = characters.reduce(function(preValue, currentValue) {
	return +preValue + (+currentValue.height) + (+currentValue.mass)
}, 0)
console.log(`tong chieu cao va can nang la ${totalHeightMass}`)

const result = characters.reduce((preValue, currentValue) => {
	preValue.totalHeight += +currentValue.height
	preValue.totalMass += +currentValue.mass
	return preValue
}, {totalHeight: 0, totalMass: 0})
console.log(result)

// output:
// {
// 	totalHeight : số,
// 	totalMass : số
// }
// Suy ra có initital là {totalMass: 0,totalHeight: 0}
// 0: preValue:{
// 	totalHeight : 0,
// 	totalMass : 0
// }
// currentValue
// 	{
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     }
// preValue.totalHeight = 0 + 172 = 172
// preValue.totalMass = 0 + 77 = 172
// =>preValue:{
// 	totalHeight : 172,
// 	totalMass : 77
// }
// 1:preValue:{
// 	totalHeight : 172,
// 	totalMass : 77
// }
// currentValue
// 	{
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
// preValue.totalHeight = 172+202 = 304
// preValue.totalMass = 77+136 =  213
// =>preValue:{
// 	totalHeight : 304,
// 	totalMass : 213
// }
// .....
// **MAP : return ra 1 mảng mới
// VD3: output : 1 mảng gồm có name.height.mass, eye_color,gender, "totalMassHeight"
const resultMap = characters.map((item, index) => {
	return {
		...item,
		'totalMassHight': +item.height +(item.mass)
	}
})
console.log(resultMap)

// Filter
const filterArr = [2, 7, 9, 12]
console.log(filterArr.filter((item) => {
	return item % 2 === 0
}))
// let newArr = []
// 0: item = 2 => item %2 =>true => newArr= [2]
// 1: item = 7 => item %2 =>false => newArr= [2]
// 2: item = 9 => item %2 =>false => newArr= [2]
// 3: item = 12 => item %2 =>true => newArr= [2, 12]

// Sort : sắp xếp các phần tử của mảng
const resutltSort = filterArr.sort((a,b) => {
	return a - b
})
console.log(resutltSort)

// forEach : duyệt qua các phần tử ,không trả về giá trị
let resultSum = 0;
filterArr.forEach((item, index, arr) => {
	resultSum += item
})
console.log(resultSum)

// find là hàm tìm kiếm trong js => output  item trong array => tim dc 1 ong la return luon
const resultFind = characters.find((item, index) => {
	return item.name === 'Luke Skywalker'
})
console.log(resultFind)


// Khai báo obj

const obj1 = {
	"name": "quan",
	"age": "22",
	getInfo : function(){
		return this.name + this.age
	}
}
// obj.name
// obj['name']
console.log(obj1.getInfo())

// destructring
const obj = {
	"name": "quan",
	"age": "22",
	'app': {
		'vi': 'ngot',
		'arr1': [9, 77, 99]
	}
}
const {name, age} = obj
console.log(name, age)
// layvingot
console.log(obj.app.vi)
const {app: {vi}} = obj
console.log(vi)

const newArr1 = [1, 9, 10, 12]
const [t1] = newArr1
console.log(t1)
const [, t2] = newArr1
console.log(t2)

// lay77
const {app: {arr1: [, c2]}} = obj
console.log(c2)










