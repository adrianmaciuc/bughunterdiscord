const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config()


const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
] });

client.commands = new Collection();

const slashCommandsPath = path.join(__dirname, 'slashCommands');
const slashCommandFiles = fs.readdirSync(slashCommandsPath).filter(file => file.endsWith('.js'));
const channelMsgCommandsPath = path.join(__dirname, 'channelMsgCommands');
const channelMsgCommandFiles = fs.readdirSync(channelMsgCommandsPath).filter(file => file.endsWith('.js'));
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of channelMsgCommandFiles) {
	const filePath = path.join(channelMsgCommandsPath, file);
	const command = require(filePath);
	client.commands.set(command.name, command);
}

for (const file of slashCommandFiles) {
	const filePath = path.join(slashCommandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	}
	else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('messageCreate', message => {
	if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;

	const args = message.content.slice(process.env.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on('guildMemberAdd', member => {
	const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome-to-the-server'); 
	if (!welcomeChannel) return; // check if the welcome channel exists
	
	welcomeChannel.send(`Welcome to our server, ${member}! Please read the rules in the #rules channel and introduce yourself in the #about-me channel. If you want to access our cool features provided by @Kubalicious bot, type in any channel !botcommands`);
});

client.on('guildMemberRemove', member => {
	const leaveChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome-to-the-server');
	if (!leaveChannel) return; // check if the leaving channel exists
	
	leaveChannel.send(`Goodbye, ${member.user.tag}. We'll miss you!`);
});

// Log in to Discord with your client's token
client.login(process.env.cubaToken);

