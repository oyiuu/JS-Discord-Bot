const Discord = require("discord.js");

module.exports = {
	name: "ping",
	description: "Ping!",
	execute(message, args) {
		message.channel.send(`🏓\`${Date.now() - message.createdTimestamp}\`ms`)
	},
};