module.exports = {
	name: 'istqb',
	usage: `!istqb . You do not need to type anything else than !question`,
	execute(message) { 
		const extractedArgs = message.content.slice(process.env.prefix.length).trim().split(" ")

		if (message.author.bot === false 
			&& message.member.roles.cache.some(role => role.id === '1085216984372871208')
			&& message.content.startsWith(process.env.prefix + 'istqb')) {

			if (extractedArgs.length > 2) { 
				return message.reply(`usage of !istqb : ${message.client.commands.get('istqb').usage} `)
			}

			const getList = Object.keys(questions)
			const randomQuestion = questions[getList[ getList.length * Math.random() << 0]]

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
			}, 20000)
		}
	},
};

const questions = {
	1 : {
		question: "1. Which of the problems below BEST characterize a result of software failure?",
		answer1: 'Damaged reputation',
		answer2: 'Lack of methodology',
		answer3: 'Inadequate training',
		answer4: 'Regulatory Compliance',
		correctAnswer: `Q1 - Correct answer is 1 . As per page number 13 of the ISTQB Syllabus: Software 
						that does not work correctly can lead to many problems, including loss of money,
						 time, or business reputation, and even injury or death.`,
	},
	2 : {
		question: "2. Faults found by users are due to",
		answer1: 'Poor quality software',
		answer2: 'Poor software and poor testing',
		answer3: 'Bad luck',
		answer4: 'Insufficient time for testing',
		correctAnswer: `Q2 - Correct answer is 2`,
	},
	3 : {
		question: "3. Which of the following statements contains a valuable objective for a test team?",
		answer1: 'Prove that the remaining defects will not cause any additional failures.',
		answer2: 'Run all of the tests that are defined for the test object as quickly as possible',
		answer3: 'Prove that all faults have been identified through thorough testing.',
		answer4: 'Cause as many failures as possible so that faults can be identified and corrected.',
		correctAnswer: `Q3 - Correct answer is 4`,
	},
	4 : {
		question: "4. Which of these are objectives for software testing?",
		answer1: 'Determine the productivity of programmers',
		answer2: 'Eliminate the need for future program maintenance',
		answer3: 'Eliminate every error prior to release',
		answer4: 'Uncover software errors',
		correctAnswer: `Q4 - Correct answer is 4`,
	},
	5 : {
		question: `5. Which of the following are USUALLY stated as testing objectives?:\n
					I. Finding defects in the software\n
					II. Reducing maintenance costs\n
					III. Confirming that the system works\n
					IV. Assessing the quality of the software\n
					V. Meeting schedule milestones`,
		answer1: 'I and II',
		answer2: 'I and IV',
		answer3: 'II IV and V.',
		answer4: 'III and IV',
		correctAnswer: `Q5 - Correct answer is 2`,
	},
	6 : {
		question: "6. Which is not the testing objectives?",
		answer1: 'Finding Defects',
		answer2: 'Gaining confidence about the level of quality and providing information',
		answer3: 'Preventing defects',
		answer4: 'Debugging defects',
		correctAnswer: `Q6 - Correct answer is 4. Debugging is a developers task and not the objective of testing`,
	},
}
	
