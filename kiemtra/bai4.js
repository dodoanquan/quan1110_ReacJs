const div = document.getElementById("wrap")
async function getData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const userList = response.json();
	return userList;
}
getData().then(data => {
	data.map(users => {
		const userDiv = document.createElement('div')
		userDiv.innerHTML =`
		<div class="head d-flex">
		<img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg">
		<div>
		<div class="id"> <b>ID:</b> ${users.id}</div>
		<div class="name"><b>Name:</b>${users.name}</div>
		</div>
		</div>
		<div class="main">
		<div class="email"><b>Email</b>:</b> ${users.email}</div>
		<div class="address"><b>Address:</b> ${users.address.street} </div>
		<div class="phone"><b>Phone:</b> ${users.phone}</div>
		<div class="website"><b>Website:</b>${users.website}</div>
		<div class="company"><b>Company:</b>${users.company.name}</div>
		</div>
		`
		div.append(userDiv)
	})

	const getInput = document.querySelector('#search')
	getInput.addEventListener("keyup", function(event){
		const valueInput = event.target.value;
		if(event.key === "Enter"){
			for (let i of data){
				if (i.id == valueInput) {
					div.innerHTML =`
					<div class="item">
					<div class="head d-flex">
					<img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg">
					<div>
					<div class="id"> <b>ID:</b> ${i.id}</div>
					<div class="name"><b>Name:</b>${i.name}</div>
					</div>
					</div>
					<div class="main">
					<div class="email"><b>Email</b>:</b> ${i.email}</div>
					<div class="address"><b>Address:</b> ${i.address.street}</div>
					<div class="phone"><b>Phone:</b> ${i.phone}</div>
					<div class="website"><b>Website:</b>${i.website}</div>
					<div class="company"><b>Company:</b>${i.company.name}</div>
					</div>
					</div>
					`
				}else if(valueInput == ""){
					location.reload()
				}
			}
		}
	})
})