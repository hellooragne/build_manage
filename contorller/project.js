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

		console.log("task create");

		var sql = {project_id: req.query.project_id, name: req.query.name, people:req.query.people, content: req.query.content};
		m.inserttask(sql, function() {
			res.redirect('/project');
		});
	});

	app.get('/task/show', function (req, res) {

		console.log(req.query.id);
		task.gettaskone(req.query.id, function(taskrows) {
			res.render('taskshow', {
				url:'',
				taskrows:taskrows,
			});
		});
	});


	app.get('/task', function (req, res) {
		res.render('task', {
			url:'',
		});
	});
	
};
