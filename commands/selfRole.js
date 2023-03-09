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
				{ name: 'Python', value: 'Python' },
				{ name: 'JavaScript', value: 'JavaScript' },
				{ name: 'C#', value: 'C#' },
			)),
    async execute(interaction) {
    	const option = interaction.options.getString('options');
		await message.member.addRole(option)
		await interaction.reply(`You have selected ${option}`)
            },
}