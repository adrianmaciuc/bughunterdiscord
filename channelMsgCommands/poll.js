module.exports = {
	name: 'poll',
	execute(message) {  
		if (message.author.bot === false && message.author.username === 'zipinel') {
			const args = message.content.slice(process.env.prefix.length).trim().split("|");

			const question = args[1]
			const voteOptions = args.slice(2)
			const pollOptionsFormatted = voteOptions.map((option, index) => `${index + 1}. ${option}`);
	
			if (message.channel) {
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
		}
	},
};
