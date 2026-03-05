const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const { sanitizeEmbed } = require('../support/embedUtils');

const botCommands = sanitizeEmbed({
	color: 0x0099FF,
	title: 'These are the bot commands you can use',
	author: { name: 'Bug Hunter team presents' },
	description: 'In order to perform a command, you have to type in the channel the command',
	fields: [
		{ name: '!intrebareinterviu', value: 'If you ask the bot for this command it will give you one of the most often questions you get during interviews for Quality Assurance' },
		{ name: '!istqb', value: 'If you ask the bot for this command it will give you one ISTQB Question and after a few seconds it will provide the answer as well' },
	],
	image: { url: 'https://kruschecompany.com/wp-content/uploads/2018/08/au9i1g9hn-1200x595.jpg' },
	footer: { text: 'Please share with us your knowledge about Quality Assurance' },
});


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
