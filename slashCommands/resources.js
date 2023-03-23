const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const eventsEmbed = new EmbedBuilder()
	.setColor(0x33A1FF)
	.setTitle('Quality Assurance Resources')
	.setDescription('The following resources were put together by our QA Community here at Bug Hunter Server')
	.addFields(
		{ name: 'Cypress Tips and Tricks', value: 'https://filiphric.com/blog' },
		{ name: 'Tips about Cypress from the God of Cypress', value: 'https://glebbahmutov.com/blog/' },
		{ name: 'Instructor with a good way of teaching Javascript concepts', value: 'https://www.youtube.com/@WebDevSimplified/playlists' },	
		{ name: 'Want to become a Quality Assurance Engineer and you do not know what road to take?', value: 'https://roadmap.sh/qa' },
		{ name: 'Why coding is hard to learn ?', value: 'https://youtu.be/74moVu-oBtU' },
		{ name: 'Want to do warm-up for an interiew ?', value: 'https://grow.google/certificates/interview-warmup/' },
		{ name: 'A good selection of testing resources', value: 'https://libraryoftesting.com/' },
		{ name: 'Need a fake API to play around with API Testing ?', value: 'https://reqres.in/' },
		{ name: 'How about anoter fake API to play around with API Testing ?', value: 'https://jsonplaceholder.typicode.com/' },
		{ name: 'Good place to find tips and tricks for various techs in QA', value: 'https://www.lambdatest.com/learning-hub/' },
		
	)
	.setFooter({ text: 'Join us, share your knowledge and maybe learn something new' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resources')
		.setDescription('Replies with resources!'),
	async execute(interaction) {
		await interaction.reply({
			embeds: [eventsEmbed],
			ephemeral: true,
		})


	},
};