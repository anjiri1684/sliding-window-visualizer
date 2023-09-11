function id(id) {
	return document.getElementById(id);
}
var count = 0;
var pattern, text, Psize, Tsize;
var idcountrater = 0;
var conti = 0;
const slidingWindowTech = async (pattern, Psize, sum, k) => {
	console.log("hola")
	var max_sum = 0;
	let maxi = document.createElement('div');
	maxi.id = "message";
	maxi.classList.add("message");
	maxi.innerText = `MaximumSum is ${max_sum}`
	console.log(maxi)
	id("pattern_text").appendChild(maxi);
	let current_sum = 0;
	let current = document.createElement('div');
	current.id = "message";
	current.classList.add("message");
	current.innerText = `CurrentSum is ${current_sum}`
	id("pattern_text").appendChild(current);
	for (let i = 0; i < Psize - k + 1; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)
		console.log(i + " " + (i + k - 1));
		id(i).style.borderLeft = "2px solid white"
		id(i).style.borderTop = "2px solid white"
		id(i).style.borderBottom = "2px solid white"
		id(i + 1).style.borderBottom = "2px solid white"
		id(i + 1).style.borderTop = "2px solid white"
		id(i + 2).style.borderTop = "2px solid white"
		id(i + 2).style.borderBottom = "2px solid white"
		id((i + k - 1)).style.borderRight = "2px solid white";
		id(i + k - 1).style.borderTop = "2px solid white"
		id(i + k - 1).style.borderBottom = "2px solid white"
		if (i != 0) {
			// current_sum=current_sum-pattern[i-1]
			id(i - 1).style.color = "Red"
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)
			current_sum = current_sum - pattern[i - 1]
			current.innerText =
				`CurrentSum after subtracting ${i - 1}th ` +
				`element from ${i} window is ${current_sum}`
			id(i - 1).style.color = "white"
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)
			id(i + k - 1).style.color = "green"
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)
			current_sum = current_sum + pattern[i + k - 1]
			current.innerText =
`CurrentSum after adding ${i + k - 1}th in ${i} window is ${current_sum}`
			id(i + k - 1).style.color = "white"
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)
		}
		else {
			for (let j = 0; j < k; j++) {
				console.log("hola 1 " + current_sum)
				id((i + j)).style.color = "Red"
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 1000)
				)
				current_sum = current_sum + pattern[i + j];
				current.innerText =
					`CurrentSum is for ${i}th window ${current_sum}`
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 1000)
				)
				id((i + j)).style.color = "white"
			}
		}
		id(i).style.borderLeft = "none"
		id(i).style.borderTop = "none"
		id(i).style.borderBottom = "none"
		id(i + 1).style.borderBottom = "none"
		id(i + 1).style.borderTop = "none"
		id(i + 2).style.borderTop = "none"
		id(i + 2).style.borderBottom = "none"
		id((i + k - 1)).style.borderRight = "none";
		id(i + k - 1).style.borderTop = "none"
		id(i + k - 1).style.borderBottom = "none"
		console.log(current_sum)

		// Update result if required.
		// max_sum = max(current_sum, max_sum);
		if (current_sum > max_sum) max_sum = current_sum;
		maxi.innerText = `MaximumSum is ${max_sum}`
	}
	current.style.display = "none"
}
let idcount = 0;
window.onload = async () => {
	id("displayer").style.display = "none";
	id("start").addEventListener('click', () => {
		id("start").style.display = "none"
		id("displayer").style.display = "flex";
		pattern = [1, 4, 2, 10, 2, 3, 1, 0, 20]
		Psize = 9
		sum = 24
		let idcount1 = 0;
		for (let i = 0; i < Psize; i++) {
			let tile = document.createElement('span');
			tile.id = idcount;
			tile.classList.add("tile");
			tile.innerText = pattern[i];
			id("pattern").appendChild(tile);
			idcount++;
		}
		slidingWindowTech(pattern, Psize, sum, 4)
	})
}
