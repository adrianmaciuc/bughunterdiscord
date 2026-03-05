const fs = require("fs");

module.exports = {
	name: "setreminder",
	description: "Save a reminder into bot memory",
	args: true,
	usage: `!setreminder * <message> * <targetHour> * <targetMinutes> * <targetDay>`,
	execute(message) {
		if (!message || (message.author && message.author.bot)) return;

		const prefix = process.env.PREFIX || "!";
		const extractedArgs = message.content.slice(prefix.length).trim().split("*");
		if (!message.content || !message.content.startsWith(prefix) || extractedArgs.length !== 5) {
			return message.reply(
				`usage of setreminder : ${message.client.commands.get("setreminder").usage} . Example : setreminder * Please remind me of this * 1 * 45 * 26`,
			);
		}

		const data = {
			message: extractedArgs[1].trim(),
			targetHour: extractedArgs[2].trim(),
			targetMinutes: extractedArgs[3].trim(),
			targetDay: extractedArgs[4].trim(),
			sent: "false",
		};

		const randomId = Math.floor(Math.random() * 1000);

		const existingData = fs.existsSync("./data.json") ? fs.readFileSync("./data.json", "utf-8") : "{}";
		let parsedEntries = {};
		try {
			parsedEntries = JSON.parse(existingData);
		}
		catch (e) {
			parsedEntries = {};
		}
		parsedEntries[randomId] = data;
		const combinedData = { ...parsedEntries };
		const jsonData = JSON.stringify(combinedData, null, 2);

		fs.writeFile("./data.json", jsonData, (err) => {
			if (err) {
				console.error(err);
				return message.reply("There was an error saving your input!");
			}
			message.reply("Your input has been saved!");
		});
	},
};
