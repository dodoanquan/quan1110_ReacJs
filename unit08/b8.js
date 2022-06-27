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
// + Lấy mảng gồm tất cả names
let resultNames = characters.map((item, index) => {
    return item.name;
})
console.log(resultNames)
// + Lấy mảng gồm tất cả height
let resultHeights = characters.map((item, index) => {
    return item.height;
})
console.log(resultHeights)
// + Tìm những người có height nhỏ hơn 100
console.log(characters.filter((item) => {
    return (item.height)*1 < 100
}))
// + Tìm những người có mass lớn hơn 100
console.log(characters.filter((item) => {
    return (item.mass)*1 > 100
}))
// + Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
let newArr = characters.map((item, index) => {
    return {
        name: item.name,
        mass: item.mass,
        height: item.height,
        gender: item.gender
    }
})
console.log(newArr)
