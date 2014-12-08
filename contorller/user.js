module.exports = function(app) {
	var userm = require('../model/userm.js');
	userm.createUser();

	app.get('/user/insert', function (req, res) {
		userm.insertUser({name:req.query.name, password:req.query.password, role:3}, function() {
			res.redirect('/project');
		});
	});

	app.get('/user/check', function (req, res) {
		userm.checkUser({name:req.query.name, password:req.query.password}, function() {
			res.redirect('/project');
		});
	});
};
