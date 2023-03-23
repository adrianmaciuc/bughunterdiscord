const { SlashCommandBuilder } = require('discord.js');

// while in development file is not exported. Once done change 'const development' into 'module.exports'
const development = {
	data : new SlashCommandBuilder()
		.setName('addevent')
		.setDescription('Add a new event to our Upcoming Events board')
		.addStringOption(option =>
			option.setName('name')
				.setDescription('Provide the name of the event')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('description')
				.setDescription('Provide description for the event')
				.setRequired(true)),

	async execute(interaction) {
		const nameOfEvent = interaction.options.getString('name');
		const descriptionOfEvent = interaction.options.getString('description');
		await interaction.reply({
			content: `${nameOfEvent} event has been added with description ${descriptionOfEvent}`,
			ephemeral: true,
		})
	
	},
}