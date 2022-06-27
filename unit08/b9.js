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
characters.forEach(function(item, index){
	console.log(`Dia chi : ${item.address}, Huyen ${item.district}, Tinh ${item.province}, Thanh pho ${item.city}`)
})