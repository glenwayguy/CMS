<<<<<<< HEAD
var mongoose = require('mongoose')

var EpisodeSchema = new mongoose.Schema({
	title: {type: String},
	ytURL: {type: String},
	published: {type: Boolean},
	approved: {type: Boolean},
	tags: [{
		text: String
	}],
	shownotes: [{
		text: Buffer,
		language: String
	}],
	transcriptions: [{
		approved: Boolean,
		text: Buffer,
		language: String
	}]
=======
var Sequelize = require('sequelize')

var fixtures = require(__dirname + '/../misc/fixtures.js')

var trackChanges = require(__dirname + '/../misc/changes.js')

var dbConfig = config.get('db')

module.exports.episode = sequelize.import(__dirname + '/episode.js')
module.exports.shownotes = sequelize.import(__dirname + '/shownotes.js')
module.exports.user = sequelize.import(__dirname + '/user.js')
module.exports.tag = sequelize.import(__dirname + '/tag.js')
module.exports.transcriptions = sequelize.import(__dirname + '/transcription.js')

var forceDatabaseUpgrade = config.get('force-upgrade')
var seedData = config.get('seed-data')

async.parallel([
	function(callback) {
		module.exports['episode'].sync({force: forceDatabaseUpgrade}).success(function(results) {
			if (forceDatabaseUpgrade) {
				trackChanges('Episodes')
				sequelize.query('ALTER TABLE Episodes ADD FULLTEXT (title);').success(function() {
					callback(null, null)
				}).failure(function(error) {
					callback(error, null)
				})
			}
		})
	}, function(callback) {
		module.exports['shownotes'].sync({force: forceDatabaseUpgrade}).success(function(results) {
			if (forceDatabaseUpgrade) {
				trackChanges('Shownotes')
				sequelize.query('ALTER TABLE Shownotes ADD FULLTEXT (content);').success(function() {
					callback(null, null)
				}).failure(function(error) {
					callback(error, null)
				})
			}
		})
	}, function(callback) {
		module.exports.user.sync({force: forceDatabaseUpgrade}).success(function(results) {
			callback(null, null)
			if (forceDatabaseUpgrade) trackChanges('Users')
		})
	}, function(callback) {
		module.exports.tag.sync({force: forceDatabaseUpgrade}).success(function(results) {
			callback(null, null)
			if (forceDatabaseUpgrade) trackChanges('Tags')
		})
	}, function(callback) {
		module.exports['transcriptions'].sync({force: forceDatabaseUpgrade}).success(function(results) {
			if (forceDatabaseUpgrade) {
				trackChanges('Transcriptions')
				sequelize.query('ALTER TABLE Transcriptions ADD FULLTEXT (text);').success(function() {
					callback(null, null)
				}).failure(function(error) {
					callback(error, null)
				})
			}
		})
	}
], function(error, responses) {
	if (error) {
		console.log('SERIOUS ERROR: There was an error adding full text search to some or all database tables, which will result in unexpected results during search.')
		console.log('Error: ' + error)
	}

	if (seedData) {
		fixtures()
	}
>>>>>>> master
})

var EpisodeModel = mongoose.model('Episode', EpisodeSchema)

module.exports.Episode
