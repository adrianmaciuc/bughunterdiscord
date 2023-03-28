module.exports = {
	name: 'sendembed',
	usage: `!sendembed * Title * Description`,
	execute(message) {  
		if (message.author.bot === false 
			&& message.member.roles.cache.some(role => role.id === '1080571304404594759')
			&& message.content.startsWith(process.env.prefix + 'sendembed')) {
			const extractedArgs = message.content.slice(process.env.prefix.length).trim().split("*");

			if (message.content.startsWith(process.env.prefix) 
				&& extractedArgs.length != 3
				|| !message.content.includes('*')) { 
				return message.reply(`usage of sendembed : ${message.client.commands.get('sendembed').usage} `)
			}
	
			const title = extractedArgs[1];
			const description = extractedArgs[2];
	
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