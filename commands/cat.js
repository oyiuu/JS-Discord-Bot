const Discord = require("discord.js");
const { get } = require('snekfetch')

const talkedRecently = new Set();

module.exports = {
	name: "cat",
	description: "cats!!",
	execute(message, args) {
		
    if (talkedRecently.has(message.author.id)) {
            message.reply("3s cooldown.");
    } else {
			try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.MessageEmbed()
				.setColor("#D30171")
				.setImage(res.body.file)
				message.channel.send(embed);
			});
		} catch(err) {
			console.error(err);
		}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 3000);
    }
}};

/*

		request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

		}, function(error, response, body) {
			if(!error && response.statusCode == 200) {
				const embed = new Discord.MessageEmbed()
				.setImage(response.request.uri.href)
				.setColor("#D30171")
				message.channel.send(embed);
			} else {
				console.log(error);
			}
		})
}};

Just in case aws.random.cat goes down...

*/