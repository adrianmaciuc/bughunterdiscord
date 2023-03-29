module.exports = {
	name: 'istqb',
	usage: `!istqb . You do not need to type anything else than !question`,
	execute(message) { 
		const extractedArgs = message.content.slice(process.env.prefix.length).trim().split(" ")

		// role = active member 
		if (message.author.bot === false 
			&& message.member.roles.cache.some(role => role.id === '1085216984372871208')
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
			}, 25000)
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
	7 : {
		question: "7. Who would USUALLY perform debugging activities?",
		answer1: 'Developers',
		answer2: 'Analysts',
		answer3: 'Testers',
		answer4: 'Incident Managers',
		correctAnswer: `Q7 - Correct answer is 1. Based on Page number 14 of the ISTQB Syllabus: Debugging is the development activity that finds, analyzes, and fixes such defects.`,
	},
	8 : {
		question: "8. What is the process of analyzing and removing causes of failures in software?",
		answer1: 'Validation',
		answer2: 'Testing',
		answer3: 'Debugging',
		answer4: 'Verification',
		correctAnswer: `Q8 - Correct answer is 3.`,
	},
	9 : {
		question: "9. Why is testing necessary?",
		answer1: 'Because testing is good method to make sure there are not defects in the software',
		answer2: 'Because verification and validation are not enough to get to know the quality of the software',
		answer3: 'Because testing measures the quality of the software system and helps to increase the quality',
		answer4: 'Because testing finds more defects than reviews and inspections.',
		correctAnswer: `Q9 - Correct answer is 3.`,
	},
	10 : {
		question: "10. The most important thing about early test design is that it:",
		answer1: 'Makes test preparation easier',
		answer2: 'Means inspections are not required',
		answer3: 'Can prevent fault multiplication',
		answer4: 'Will find all faults',
		correctAnswer: `Q10 - Correct answer is 3.`,
	},
	11 : {
		question: "11. Quality Control is?",
		answer1: 'Phase building activity',
		answer2: 'Intermediate activity',
		answer3: 'End of phase activity',
		answer4: 'Design activity',
		correctAnswer: `Q11 - Correct answer is 3. Quality control is an end of phase activity because testing is done once the work product is completed, all the other quality checks are done once the activity is done,`,
	},
	12 : {
		question: "12. Failure is?",
		answer1: 'Incorect program behaviour due to a fault in the program',
		answer2: 'Bug found before product release',
		answer3: 'Bug found after product release',
		answer4: 'Bug found during design phase',
		correctAnswer: `Q12 - Correct answer is 1.`,
	},
	13 : {
		question: "13. When what is visible to end-users is a deviation from the specific or expected behavior, this is called:",
		answer1: 'An error',
		answer2: 'A failure',
		answer3: 'A mistake',
		answer4: 'A defect',
		correctAnswer: `Q13 - Correct answer is 2.`,
	},
	14 : {
		question: "14. What is failure?",
		answer1: 'Deviation from expected result to actual result',
		answer2: 'Defect in the software',
		answer3: 'Error in the program code',
		answer4: 'Fault in the system',
		correctAnswer: `Q14 - Correct answer is 1.`,
	},
	15 : {
		question: "15. How can software defects in future projects be prevented from reoccurring??",
		answer1: 'Creating documentation procedures and allocating resource contingencies',
		answer2: 'Asking programmers to perform a thorough and independent testing',
		answer3: 'Combining levels of testing and mandating inspections of all documents',
		answer4: 'Documenting lessons learned and determining the root cause of problems',
		correctAnswer: `Q15 - Correct answer is 4.`,
	},
	16 : {
		question: "16. Which defects are OFTEN much cheaper to remove?",
		answer1: 'Usability defects found by customers',
		answer2: 'Defects in infrequently used functionality',
		answer3: 'Defects that were detected early',
		answer4: 'Minor defects that were found by users',
		correctAnswer: `Q16 - Correct answer is 3.`,
	},
	17 : {
		question: "17. What is the MAIN benefit of designing tests early in the life cycle?",
		answer1: 'It is cheaper than designing tests during the test phases',
		answer2: 'It helps prevent defect from being introduced into the code',
		answer3: 'Tests designed early are more effective than tests designed later',
		answer4: 'It saves time during the testing phases when testers are busy',
		correctAnswer: `Q17 - Correct answer is 2.`,
	},
	18 : {
		question: "18. Which is not a testing principle?",
		answer1: 'Early testing',
		answer2: 'Defect clustering',
		answer3: 'Pesticide paradox',
		answer4: 'Exhaustive testing',
		correctAnswer: `Q18 - Correct answer is 4. Exhaustive testing is not the principle, Exhaustive testing means testing everything, as per the principle it should be Exhaustive testing is impossible, be careful !!`,
	},
	19 : {
		question: "19. The cost of fixing a fault:",
		answer1: 'Is not important',
		answer2: 'Increases as we move the product towards live use',
		answer3: 'Decreases as we move the product towards live use',
		answer4: 'Is more expensive if found in requirements than functional design',
		correctAnswer: `Q19 - Correct answer is 2.`,
	},
	20 : {
		question: `20. Consider the following statements about early test design:\n
					I. Early test design can prevent fault multiplication\n
					II. Faults found during early test design are more expensive to fix\n
					III. Early test design can find faults\n
					IV. Early test design can cause changes to the requirements\n
					V. Early test design takes more effort`,
		answer1: 'I, III, IV are true. II & V are false',
		answer2: 'III is true, I II IV & V are false',
		answer3: 'III & IV are true, I II & V are false',
		answer4: 'I II IV & V are true, II is false',
		correctAnswer: `Q20 - Correct answer is 1.`,
	},
	21 : {
		question: "21. The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
		answer1: 'The documentation is poor, so it takes longer to find out what the software is doing.',
		answer2: 'Wages are rising',
		answer3: 'The fault has been built into more documentation,code,tests, etc',
		answer4: 'None of the above',
		correctAnswer: `Q21- Correct answer is 3.`,
	},
	22 : {
		question: "22. In foundation level syllabus you will find the main basic principles of testing. Which of the following sentences describes one of these basic principles?",
		answer1: 'Complete testing of software is attainable if you have enough resources and test tools',
		answer2: 'With automated testing you can make statements with more confidence about the quality of a product than with manual testing',
		answer3: 'For a software system, it is not possible, under normal conditions, to test all input and output combinations.',
		answer4: 'A goal of testing is to show that the software is defect free.',
		correctAnswer: `Q22 - Correct answer is 3.`,
	},
	23 : {
		question: "23. Which of the following characterizes the cost of faults?",
		answer1: 'They are cheapest to find in the early development phases and the most expensive to fix in the latest test phases.',
		answer2: 'They are easiest to find during system testing but the most expensive to fix then.',
		answer3: 'Faults are cheapest to find in the early development phases but the most expensive to fix then.',
		answer4: 'Although faults are most expensive to find during early development phases, they are cheapest to fix then.',
		correctAnswer: `Q23 - Correct answer is 1.`,
	},
}
	
