module.exports = function(app) {
	var m = require('../model/safetym.js');
	m.createsafety();
	
	var task = require('../model/taskm.js');
	task.createtask();

	app.get('/safety', function (req, res) {
		m.getsafety(function(rows) {
			task.gettask(function(taskrows) {
				res.render('safety', {
					url:'',
					rows:rows,
					taskrows:taskrows,
				});
			});
		});
	});
};
