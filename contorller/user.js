module.exports = function(app) {
	var userm = require('../model/userm.js');
	userm.createUser();

	app.get('/user/insert', function (req, res) {
		userm.insertUser({name:req.query.name, password:req.query.password, role:3}, function() {
			res.redirect('/project');
		});
	});

	app.get('/user/login, function (req, res) {
		userm.checkUser({name:req.query.name, password:req.query.password}, function() {
			res.redirect('/project');
		});
	});

	app.get('/user/update', function (req, res) {
		updateUser: function({sale:req.query.sale, old:req.query.old, telephone:req.query.telephone, born:req.query.born}, function() {
			res.redirect('/project');
		}
	});

	app.get('/user/setPriority', function (req, res) {
		updateUser: function({priority:req.query.priority}, function() {
			res.redirect('/project');
		}
	});
};
