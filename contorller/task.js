module.exports = function(app) {
	console.log('task');

	app.get('/task', function (req, res) {
		var m = require('../model/taskm.js');
		m.createproject();
		m.getproject();
		m.insertproject('hello', 'world');
		res.render('task', {
			url:'',
		});
	});
};

