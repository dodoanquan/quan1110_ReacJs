// Bài 10:
// Sử dụng cấu trúc mảng sẽ gán 2 phần tử đầu tiên cho biến firstColor và secondColor
// và gán các phần tử còn lại cho biến otherColors. Hiển thị giá trị của 3 biến này.
// Data test:
let colors = ["white", "blue", "yellow", "black", "red", "green"];

function obj([white, blue, ...rest]) {
    let newArr = []
    newArr.push({
        "firstColor": white,
        "secondColor": blue,
        "otherColors": rest
    })
    return newArr
}
console.log(obj(colors))