// Bài 2: Giải phương trình bậc 1:
// - Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)
// - Output: Tìm x
// Data test:
// + Data 1: -2x – 9 = -3
// + Data 2: 5x + 7 = 9
function timX(a, b, c) {
	return c - b / a;
}
var x = timX (-2, -9, -3);
console.log(`Gia tri cua X la ${x}`)
