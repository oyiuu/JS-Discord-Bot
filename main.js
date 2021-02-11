const Discord = require("discord.js");
const config = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'a competition against Floppa', type: "COMPETING" } ,status: 'idle' })
  console.log(`ballin'`);
});

let prefix = "?"

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		client.commands.get("ping").execute(message, args);
	} else if (command === "avatar") {
		client.commands.get("avatar").execute(message, args);
	} else if (command === "info") {
		client.commands.get("info").execute(message, args);
	} else if (command === "weather") {
		client.commands.get("weather").execute(message, args);
	} else if (command === "help") {
		client.commands.get("help").execute(message, args);
	} else if (command === "kick") {
		client.commands.get("kick").execute(message, args);
	} else if (command === "ban") {
		client.commands.get("ban").execute(message, args);
	} else if (command === "prune") {
		client.commands.get("prune").execute(message, args);
	}
});


client.login(config.token);
