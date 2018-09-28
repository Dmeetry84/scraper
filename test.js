var fs = require('fs');
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
/*
nightmare
.goto('https://reactjs.org/tutorial/tutorial.html')
.wait(3000)
.evaluate(function () {
	var page = document.querySelector('html').innerHTML;
	return page
})
.end()
.then(function (page) {
	//console.log(result)
	fs.writeFile('files/page.html', page, function (err) {
		if (err)
			return console.log(err);
		console.log('Done');
	});
})
*/