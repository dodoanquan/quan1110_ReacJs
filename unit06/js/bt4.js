// Bài 4: Tìm số lớn nhất trong hai số
// - Input: Cho hai số
// - Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới dạng ‘N là số lớn nhất’ với N là số lớn nhất
// Data test:
// + Data 1: a = 12, b = -9
function max(a, b) {
    if (a > b) {
       console.log(`${a} la so lon nhat`)
    }else if (a < b) {
        console.log(`${b} la so lon nhat`)
    }else {
        console.log(`${a} va ${b} bang nhau`)
    }
}
max(12, -9);