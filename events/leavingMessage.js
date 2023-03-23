const { Events } = require('discord.js');
// const { currentEvents } = require('../database/connection')

module.exports = {
	name: Events.GuildMemberRemove,
	execute(member) {
		const leaveChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome-to-the-server');
		if (!leaveChannel) return; // check if the leaving channel exists
	
		leaveChannel.send(`Goodbye, ${member.user.tag}. We'll miss you!`);
	},
};