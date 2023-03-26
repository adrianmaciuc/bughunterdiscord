const { Events, Client } = require('discord.js');
const fs = require('node:fs');

let clientObj 

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		clientObj = client
		setInterval(checkTime, 3600000)
		console.log(`Logged in as ${client.user.tag}!`);
	},
};

// Helper function to check if reminders in db are past due

function checkTime(client) {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();
	const currentMinute = currentDate.getMinutes();
	const currentDay = currentDate.getDate();
  
	const jsonData = fs.readFileSync('./data.json', 'utf-8');
	const data = JSON.parse(jsonData);

	for (const reminder in data) {
		if (currentHour == data[reminder].targetHour 
			&& currentMinute >= data[reminder].targetMinutes  
			&& currentDay == data[reminder].targetDay 
			&& data[reminder].sent == "false") {

			const channel = clientObj.channels.cache.get('1084747249122283520');
			channel.send(data[reminder].message);

			data[reminder].sent = "true"
		}
	}

	const jsonDataAfterLoop = JSON.stringify(data, null, 2);
	fs.writeFile('./data.json', jsonDataAfterLoop, (err) => {
		if (err) {
			console.error(err);
		}
	});
}