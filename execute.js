$.getJSON("./jewel.json", function(data) {
	for (const jewel in data) {
		console.log(jewel);
	}

})

