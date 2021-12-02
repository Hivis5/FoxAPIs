const fox_btn = document.getElementById('fox_btn');

const fox_result = document.getElementById('fox_result');


fox_btn.addEventListener('click', getFox);


function getFox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}

