const Discord = require("discord.js");

module.exports = {
	name: "help",
	description: "returns list of commands",
	execute(message, args) {
      const data = new Discord.MessageEmbed()
        .setColor("#D30171")
        .setAuthor(user.username, user.displayAvatarURL())
        .addField("avatar [mention]", "Returns avatar of user")
        .addField("info [mention]", "Returns general information about a user")
        .addField("ping", "Returns response time of the bot")
        .addField("weather (City)", "Returns weather stats of a city.")
      message.channel.send(data);
}}