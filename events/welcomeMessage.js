const { Events } = require('discord.js');
// const { currentEvents } = require('../database/connection')

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
		const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome-to-the-server'); 
		if (!welcomeChannel) return; // check if the welcome channel exists
        
		welcomeChannel.send(`Welcome to our server, ${member}! Please read the rules in the #rules channel and introduce yourself in the #about-me channel.`);
	},
};