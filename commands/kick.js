const Discord = require("discord.js");

module.exports = {
	name: "kick",
	description: "kicks user from the server",
	execute(message, args) {	
	    const user = message.mentions.users.first();
	    const member = message.guild.member(user);
		if (user) {
		  const member = message.guild.member(user);
		  if (member) {
			member
			  .kick()
			  .then(() => {
				message.reply(`${user.tag} has been kicked.`);
			  })
			  .catch(err => {
				message.reply('Unable to kick this user. [Insufficient Permissions]');
				console.error(err);
			  });
		  } else {
			message.reply("Mentioned user is not available.");
		  }
		} else {
		  message.reply("please specify a user.");
		}
	}
};