const { Events } = require('discord.js');
const { currentEvents } = require('../database/connection')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		currentEvents.sync();
		console.log(`Logged in as ${client.user.tag}!`);
	},
};