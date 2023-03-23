const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const botCommands = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('These are the bot commands you can use')
	.setAuthor({ name: 'Bug Hunter team presents' })
	.setDescription('In order to perform a command, you have to type in the channel the command')
	.addFields(
		{ name: '/upcoming', value: 'The events that we currently have scheduled' },
		{ name: '/selfrole', value: 'By using this command you can assign to yourself a role. Please choose the technology that you feel comfortable with the most. You may be asked questions about it.' },
		{ name: '!intrebareinterviu', value: 'If you ask the bot for this command it will give you one of the most often questions you get during interviews for Quality Assurance' },
		{ name: '/resources', value: 'This command will give you our top links with resources we think every Quality Assurance Engineer should have access to', inline: true },
	)
	.setImage('https://kruschecompany.com/wp-content/uploads/2018/08/au9i1g9hn-1200x595.jpg')
	.setFooter({ text: 'Please share with us your knowledge about Quality Assurance' });


module.exports = {
	name: 'botcommands',
	description: 'Most common bot commands',
	execute(message) {
		message.reply({
			embeds: [botCommands],
			ephemeral: true,
		})

	},
}
