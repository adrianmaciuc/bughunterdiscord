const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const botCommands = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('These are the bot commands you can use')
	.setAuthor({ name: 'Bug Hunter team presents' })
	.setDescription('In order to perform a command, you have to type in the channel the command')
	.addFields(
		{ name: '!intrebareinterviu', value: 'If you ask the bot for this command it will give you one of the most often questions you get during interviews for Quality Assurance' },
		{ name: '!istqb', value: 'If you ask the bot for this command it will give you one ISTQB Question and after a few seconds it will provide the answer as well' },	
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
