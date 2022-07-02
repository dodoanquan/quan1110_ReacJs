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
let resultNames = characters.map(({name}) => {
    return `${name}`;
})
console.log(resultNames)
// + Lấy mảng gồm tất cả height
let resultHeights = characters.map(({height}) => {
    return `${height}`;
})
console.log(resultHeights)
// + Tìm những người có height nhỏ hơn 100
console.log(characters.filter(({height}) => {
    return (`${height}`)*1 < 100
}))
// + Tìm những người có mass lớn hơn 100
console.log(characters.filter(({mass}) => {
    return (`${mass}`)*1 > 100
}))
// + Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
const sortName = characters.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    else if (a.name === b.name) return 0
    return -1
})
console.log(sortName)

// Tuong tu




