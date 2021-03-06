import Discord from 'discord.js';
import {} from "dotenv/config";
import {fs} from 'fs';

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'a competition against Floppa', type: "COMPETING" } ,status: 'idle' })
  console.log(`ballin'`);
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const prefix = process.env.PREFIX;

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(process.env.TOKEN);
