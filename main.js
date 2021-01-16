const { Client } = require('discord.js');
const Eris = require('eris');
const config = require('./config.json');

var bot = new Eris(config.token);
bot.on("ready", () => {
	console.log("ballin'");
	bot.editStatus('idle', { name: 'BALLS', type: 3});
});

bot.on("messageCreate", (msg) => {
    if(msg.content === "?balls") {
        bot.createMessage(msg.channel.id, "BALLS");
    }
});

bot.connect();