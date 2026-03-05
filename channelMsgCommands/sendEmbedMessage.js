const {
	constants: { ROLES },
} = require("../support/constants.js");

module.exports = {
	name: "sendembed",
	usage: `!sendembed * Title * Description`,
	execute(message) {
		// Basic defensive checks to avoid runtime TypeErrors when message or member is undefined
		if (!message || (message.author && message.author.bot)) return;

		if (
			(message.member && message.member.roles && message.member.roles.cache && message.member.roles.cache.some((role) => role.id === ROLES.staff)) &&
      message.content &&
      message.content.startsWith((process.env.PREFIX || "!") + "sendembed")
		) {
			const extractedArgs = message.content
				.slice(process.env.PREFIX.length)
				.trim()
				.split("*");

			if (
				(message.content.startsWith(process.env.PREFIX || "!") &&
            extractedArgs.length != 3) ||
          !message.content.includes("*")
			) {
				return message.reply(
					`usage of sendembed : ${message.client.commands.get("sendembed").usage} `,
				);
			}

			const title = extractedArgs[1];
			const description = extractedArgs[2];
			const { sanitizeEmbed } = require('../support/embedUtils');

			if (message.channel) {
				const embedMessage = sanitizeEmbed({
					color: 0x33a1ff,
					title: title,
					description: description,
				});

				message.channel.send({ embeds: [embedMessage] });
				message.react("✅");
			}
			else {
				message.react("❌");
			}
		}
	},
};
