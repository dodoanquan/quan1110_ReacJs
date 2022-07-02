// Bài 9:
// Định dạng địa chỉ ở dạng: address, district, province, city
// -Hãy cấu trúc dữ liệu để in ra địa chỉ dạng như trên
// -Hãy viết hàm để in ra địa chỉ dạng trên với dữ liệu đã cấu trúc
const characters = [
    {
        address: 'Phan Trong Tue',
        district: 'Thanh Tri',
        province: 'Ha Noi',
        city: 'Ha Noi'
    },
];
characters.forEach(function({address, district, province, city}){
	console.log(`Dia chi : ${address}, Huyen ${district}, Tinh ${province}, Thanh pho ${city}`)
})