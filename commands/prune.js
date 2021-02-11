const Discord = require("discord.js");

module.exports = {
	name: "prune",
	description: "",
	execute(message, args) {
		const member = message.guild.member(message.author);
		const num = parseInt(args[0]) + 1;
		if (member.hasPermission('MANAGE_MESSAGES')) {
			if (isNaN(num)) {
				message.reply("numbers only.")
			} else if (num <= 1 || num > 100){
				message.reply("please specify an amount. [0<x<100]")
			} else {
				message.channel.bulkDelete(num);
				message.channel.send(`Pruned ${num-1} messages.`).then(msg => {
				msg.delete({ timeout: 4000 })}).catch(console.error);
			}
		} else {
			message.reply("Unable to prune. [Insufficient Permissions]");
		}
	}
};