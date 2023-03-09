const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
	.setName('selfrole')
	.setDescription('Setup the roles/tech stack you think fits well with your knowledge')
	.addStringOption(option =>
		option.setName('options')
			.setDescription('options available to choose')
			.setRequired(true)
			.addChoices(
				{ name: 'Python', value: '1083496592339906721' },
				{ name: 'JavaScript', value: 'JavaScript' },
				{ name: 'C#', value: 'C#' },
			)),
    async execute(interaction) {
    	const value = interaction.options.getString('options');
		await interaction.member.roles.add(value)
		await interaction.reply(`Role added to your user`,{ ephemeral: true})
    },
}