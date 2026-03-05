const {
	constants: { ROLES },
} = require("../support/constants.js");

module.exports = {
	name: "poll",
	usage: `!poll * <question> * <answer1> * <answer2> * <answerN>`,
	execute(message) {
		if (!message || (message.author && message.author.bot)) return;

		const prefix = process.env.PREFIX || "!";
		if (!(message.member && message.member.roles && message.member.roles.cache && message.member.roles.cache.some((role) => role.id === ROLES.staff))) {
			return;
		}

		if (!message.content || !message.content.startsWith(prefix + "poll")) {
			return;
		}

		const extractedArgs = message.content.slice(prefix.length).trim().split("*");

		if (extractedArgs.length < 2 || !message.content.includes("*")) {
			return message.reply(`usage of !poll : ${message.client.commands.get("poll").usage} `);
		}

		// proceed
		{
			const question = extractedArgs[1];
			const voteOptions = extractedArgs.slice(2);
			const pollOptionsFormatted = voteOptions.map(
				(option, index) => `${index + 1}. ${option}`,
			);

			const embedMessage = {
				color: 0x33a1ff,
				title: question,
				description: pollOptionsFormatted.join("\n"),
				footer: {
					text: `Poll created by ${message.author.username}`,
				},
			};
			message.channel.send({ embeds: [embedMessage] }).then((sentMessage) => {
				for (let i = 0; i < voteOptions.length; i++) {
					sentMessage.react(`${i + 1}\u20E3`);
				}
			});
		}
	},
};
