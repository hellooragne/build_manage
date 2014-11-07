module.exports = function(app) {
	var m = require('../model/projectm.js');
	m.createproject();
	
	var task = require('../model/taskm.js');
	task.createtask();

	app.get('/project', function (req, res) {
		var m = require('../model/projectm.js');
		m.getproject(function(rows) {
			task.gettask(function(taskrows) {
				res.render('project', {
					url:'',
					rows:rows,
					taskrows:taskrows,
				});
			});
		});
	});

	app.get('/project/create', function (req, res) {
		var m = require('../model/projectm.js');

		m.insertproject(req.query.name, '', function() {
			res.redirect('/project');
		});
	});


	app.get('/task/create', function (req, res) {
		var m = require('../model/taskm.js');

		m.inserttask(req.query.project_id, req.query.name, '', function() {
			res.redirect('/project');
		});
	});
	
};

