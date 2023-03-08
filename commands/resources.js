const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resources')
		.setDescription('Replies with resources!'),
	async execute(interaction) {
		await interaction.reply({ 
            content: `Secret Pong! - https://www.google.com
                      Secret Receipe - https://www.bing.com
                      Secret Sauce - https://www.breakit.dev`,
            ephemeral: true });
	},
};