const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const eventsEmbed = new EmbedBuilder()
	.setColor(0x33A1FF)
	.setTitle('Quality Assurance Resources')
	.setDescription('The following resources were put together by our QA Community here at Bug Hunter Server')
	.addFields(
		{ name: 'Secret Weapon', value: ' https://www.google.com' },
		{ name: 'Library of Testing', value: 'https://libraryoftesting.com/' },
		{ name: 'Interview Warm-up', value: 'https://grow.google/certificates/interview-warmup/' },	
		
	)
	.setFooter({ text: 'Join us, share your knowledge and maybe learn something new' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resources')
		.setDescription('Replies with resources!'),
	async execute(interaction) {
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