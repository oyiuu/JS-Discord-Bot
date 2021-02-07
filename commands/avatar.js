const Discord = require("discord.js");

module.exports = {
	name: "avatar",
	description: "returns user's avatar",
	execute(message, args) {
      const user = message.mentions.users.first() || message.author;
      const data = new Discord.MessageEmbed()
        .setColor("#D30171")
        .setTitle(user.username+"'s Avatar")
        .setImage(user.displayAvatarURL({size: 1024}))
      message.channel.send(data);
}}