const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const eventsEmbed = new EmbedBuilder()
	.setColor(0x33A1FF)
	.setTitle('Upcoming Events')
	.setDescription('--------------------------------------------')
	.addFields([
		{ name: 'Meet \'n Greet', value: 'Every Wednesday at 19:00 - This event is about welcoming and meeting new people' },
	])
	.setFooter({ text: 'Join us, share your knowledge and maybe learn something new' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('upcoming')
		.setDescription('See what are the upcoming important events on this server'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply({
			embeds: [eventsEmbed],
			ephemeral: true,
		})
	},
};