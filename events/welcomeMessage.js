const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
		const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome-to-the-server'); 
		if (!welcomeChannel) return; // check if the welcome channel exists
        
		welcomeChannel.send(`Welcome to our server, ${member}! Please read the rules in the #rules channel. Familiarize yourself with the servers structure on #onboarding and introduce yourself in the #about-me channel.`);
	},
};