const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const eventsEmbed = new EmbedBuilder()
	.setColor(0x33A1FF)
	.setTitle('Upcoming Events')
	.setDescription('The following events are organized by our QA Community here at Bug Hunter Server')
	.addFields(
		{ name: 'Cypress Workshop', value: 'XX.03.2023 at XX:XX' },
		{ name: 'Thursday Tech Talk', value: 'XX.03.2023 at XX:XX' },
	)
	.setFooter({ text: 'Join us, share your knowledge and maybe learn something new' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('upcoming_events')
		.setDescription('See what are the upcoming important events on this server'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		if (interaction.channel.name == "bot-commands") {
			await interaction.reply({
				embeds: [eventsEmbed],
				ephemeral: true,
			})
		}
		else {
			await interaction.reply({
				content: `This Kubalicious slash command works only on channel #bot-commands`,
				ephemeral: true,
			})
		}
        
	},
};