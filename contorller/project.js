module.exports = function(app) {
	app.get('/project', function (req, res) {
		var m = require('../model/projectm.js');
		m.createproject();
		m.getproject(function(rows) {
			res.render('project', {
				url:'',
				rows:rows,
			});
		});
	});

	app.get('/project/create', function (req, res) {
		var m = require('../model/projectm.js');

		m.insertproject(req.query.name, '', function() {
			res.redirect('/project');
		});
	});
};

