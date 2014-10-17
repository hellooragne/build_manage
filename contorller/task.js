module.exports = function(app) {
	console.log('task');

	app.get('/task', function (req, res) {
		var m = require('../model/taskm.js');
		m.getproject();
		res.render('task', {
			url:'',
		});
	});
};

