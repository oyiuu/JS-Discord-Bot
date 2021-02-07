const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
	name: "info",
	description: "returns user's info",
	execute(message, args) {
      const user = message.mentions.users.first() || message.author;
      const data = new Discord.MessageEmbed()
        .setColor("#D30171")
        .setAuthor(user.username, user.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL())
        .addField("ID", user.id, true)
        .addField("Nickname", user.nickname, true)
        .addField("Account Created", moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a"))
        .addField("Join Date", moment(message.guild.member(user).joinedAt).format("MMMM Do YYYY, h:mm:ss a"))
      message.channel.send(data);
}}