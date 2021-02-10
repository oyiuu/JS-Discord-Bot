const Discord = require("discord.js");

module.exports = {
	name: "ban",
	description: "bans user from the server",
	execute(message, args) {	
	    const user = message.mentions.users.first();
	    const member = message.guild.member(user);
		if (user) {
		  const member = message.guild.member(user);
		  if (member) {
			member
			  .ban()
			  .then(() => {
				message.reply(`${user.tag} has been ban.`);
			  })
			  .catch(err => {
				message.reply('Unable to ban this user. [Insufficient Permissions]');
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