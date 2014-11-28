
module.exports = function(app) {
	require('./project.js')(app);
	require('./safety.js')(app);
};
