module.exports = {
	name: 'sendembed',
	execute(message) {  
		if (message.author.bot === false && message.author.username === 'zipinel') {
			const args = message.content.slice(process.env.prefix.length).trim().split("|");
	
			const title = args[1];
			const description = args[2];
	
			if (message.channel) {
				const embedMessage = {
					color: 0x33A1FF,
					title: title,
					description: description,
				};
	
				message.channel.send({ embeds: [embedMessage] });
				message.react('✅');
			}
			else {
				message.react('❌');
			}
		}
	},
};