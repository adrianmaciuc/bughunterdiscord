const { constants : { ROLES } } = require('../support/constants.js');
const { questions } = require('../support/istqbQuestions.js');

module.exports = {
	name: 'istqb',
	usage: `!istqb . You do not need to type anything else than !istqb`,
	execute(message) { 
		const extractedArgs = message.content.slice(process.env.prefix.length).trim().split(" ")

		// check if message sender is active member
		if (message.author.bot === false 
			&& message.member.roles.cache.some(role => role.id === ROLES.activeMember)
			&& message.content.startsWith(process.env.prefix + 'istqb')) {

			if (extractedArgs.length > 2) { 
				return message.reply(`usage of !istqb : ${message.client.commands.get('istqb').usage} `)
			}

			const getList = Object.keys(questions)
			const randomQuestion = questions[getList[getList.length * Math.random() << 0]]

			const embedMessage = {
				color: 0x33A1FF,
				title: randomQuestion.question,
				description: `
				1] ${randomQuestion.answer1}\n
                2] ${randomQuestion.answer2}\n
                3] ${randomQuestion.answer3}\n
                4] ${randomQuestion.answer4}\n
                `,
			};

			message.channel.send({ embeds: [embedMessage] }).then((sentMessage)=>{
				sentMessage.react(`1\u20E3`);
				sentMessage.react(`2\u20E3`)
				sentMessage.react(`3\u20E3`)
				sentMessage.react(`4\u20E3`)
			})
			setTimeout(() => {
				message.channel.send(randomQuestion.correctAnswer)
			}, 50000)
		}
		else {
			message.reply(`You must have 'active member' role to use this command. Participate in servers events to gain this role.`)
		}
	},
};
	
