const Sequelize = require('sequelize');

/*
 * equivalent to: CREATE TABLE currentEvents(
 * name VARCHAR(255),
 * description TEXT,
 * username VARCHAR(255),
 * );
 */
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const currentEvents = sequelize.define('currentEvents', {
	name: {
		type: Sequelize.STRING,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
})

module.exports = { currentEvents }