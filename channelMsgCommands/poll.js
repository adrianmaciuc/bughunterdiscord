module.exports = {
	name: 'poll',
	usage: `!poll * <question> * <answer1> * <answer2> * <answerN>`,
	execute(message) { 
		let extractedArgs

		if (message.author.bot === false 
			&& message.member.roles.cache.some(role => role.id === '1080571304404594759')
			&& message.content.startsWith(process.env.prefix + 'poll')) {
			extractedArgs = message.content.slice(process.env.prefix.length).trim().split("*");
		}

		if (message.content.startsWith(process.env.prefix) 
			&& extractedArgs.length < 2
			|| !message.content.includes('*')) { 
			return message.reply(`usage of !poll : ${message.client.commands.get('poll').usage} `)
		}
		else {

			const question = extractedArgs[1]
			const voteOptions = extractedArgs.slice(2)
			const pollOptionsFormatted = voteOptions.map((option, index) => `${index + 1}. ${option}`);
	
			const embedMessage = {
				color: 0x33A1FF,
				title: question,
				description: pollOptionsFormatted.join('\n'),
				footer: {
					text: `Poll created by ${message.author.username}`,
				},
			};
			message.channel.send({ embeds: [embedMessage] }).then((sentMessage)=>{
				for (let i = 0; i < voteOptions.length; i++) {
					sentMessage.react(`${i + 1}\u20E3`);
				}
			})
	
		}
	},
};
