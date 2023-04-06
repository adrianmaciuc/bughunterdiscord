module.exports = {
	name: 'intrebareinterviu',
	description: 'Request an interview question',
	execute(message) {
		// checks if active member 1085216984372871208
		const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
		if (message.member.roles.cache.some(role => role.id === '1085216984372871208')) {
			message.channel.send(randomQuestion)
		}
		else {
			message.reply('You do not have the right to request a question. Only members with role `active member` can ')
		}
	},	
}


const questions = [
	'1. Software Development Life Cycle (SDLC) - Name and describe in short terms the main steps of SDLC',
	'2. What are Unit Tests? Who writes and runs them ?',
	'3. What is System Testing ?',
	'4. Agile Methodology - What happens at a Sprint Retrospective?',
	'5. What are acceptance criterias?',
	'6. You found a bug. Explain the process of bug reporting. What does it include?',
	'7. When does a Quality Assurance Engineer start to work ?',
	'8. What are the steps a bug report/ticket goes through. Starts with status : NEW ... and then?',
	'9. What is a test scenario? Provide an example',    
	'10. What is a test case? Provide an example',    
	'11. What is non-functional testing? Provide examples of non-functional testing',   
	'12. What is the difference between dynamic testing and static testing? Provide examples',
	'13. If we do not have clear written user requirements, how can we test the software?',
	'14. What is exploratory testing and when do we use it?',
	'15. What is regression testing?',     
	'16. Name at least three test techniques ?',
	'17. What is Equivalence Partitioning ? Provide an example where this can be used',
	'18. What is Boundary Value Analysis ? Provide an example where this can be used',
	'19. What is localization testing ?',
	'20. API Testing - What is the difference between PUT and PATCH ?',
	'21. API Testing - What does the response 201 mean ? When does it appear?',
	'22. API Testing - What does 401 mean ? When does it appear?',
	'23. API Testing - What data is most commonly added in headers section?',
	'24. API Testing - What is an endpoint?',
	'25. API Testing - What is the difference between GET and POST?',
	'27. HTTP Responses - What is 100 ?',
	'28. HTTP Responses - What is 200 ?',
	'29. HTTP Responses - What is 404 ?',
	'30. HTTP Responses - What is 403 ?',
	'31. HTTP Responses - What is 500 ?',
	'32. What does a test plan include ?',
	'33. What are the most common mistakes testers do ?',
	'34. If you reported a defect to a developer and he rejected it, what shall you do?',
	'35. Name at least 2 Test management tools ?',
	'36. Name at least 2 Test automation tools ?',
	'37. What is monkey testing ?',
	'38. What is a test suite ?',
	'39. What is a test evnironment ? Provide some examples',
	'40. What is a test data ? Provide some examples',
	'41. What is smoke testing ?',
	'42. What is sanity testing ?', 
	'43. What is ad-hoc testing ?',   
	'44. Provide an example of a bug that has high priority and low severity ?', 
	'45. Provide an example of a bug that has high priority and high severity ?', 
	'46. Provide an example of a bug that has low priority and low severity ?', 
	'47. What is a traceability matrix?',
	'48. What is the difference between black-box and white-box testing?',
	'49. What is retesting?',
]