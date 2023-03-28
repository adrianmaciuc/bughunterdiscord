module.exports = {
	name: 'question',
	usage: `!question . You do not need to type anything else than !question`,
	execute(message) { 

		if (message.author.bot === false 
			&& message.member.roles.cache.some(role => role.id === '1085216984372871208')
			&& message.content.startsWith(process.env.prefix + 'question')) {

			const getList = Object.keys(questions)
			const randomQuestion = questions[getList[ getList.length * Math.random() << 0]]
			// questions[getList[ getList.length * Math.random() << 0]]
			const embedMessage = {
				color: 0x33A1FF,
				title: randomQuestion.question,
				description: `
                a) ${randomQuestion.answerA}\n
                b) ${randomQuestion.answerB}\n
                c) ${randomQuestion.answerC}\n
                d) ${randomQuestion.answerD}\n
                `,
			};

			message.channel.send({ embeds: [embedMessage] }).then((sentMessage)=>{
				
				sentMessage.react(`1\u20E3`);
				sentMessage.react(`2\u20E3`)
				sentMessage.react(`3\u20E3`)
				sentMessage.react(`4\u20E3`)
			})
		}
	},
};

const questions = {
	1 : {
		question: "question value",
		answerA: 'option 1 to answer',
		answerB: 'option 2 to answer',
		answerC: 'option 3 to answer',
		answerD: 'option 4 to answer',
	},
	2 : {
		question: "second question value",
		answerA: 'second option 1 to answer',
		answerB: 'second option 2 to answer',
		answerC: 'second option 3 to answer',
		answerD: 'second option 4 to answer',
	},
}
	
