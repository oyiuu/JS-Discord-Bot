const Discord = require("discord.js");

//TO-DO: remove reaction of user instantly

module.exports = {
	name: "help",
	description: "returns list of commands",
	execute(message, args) {
	
	  let pages = [`Prefix: '?'`, `Prefix: '?'`];
	  let page = 1;
	  
      const embed01 = new Discord.MessageEmbed()
        .setColor("#D30171")
		.setFooter(`Page ${page} of ${pages.length}`)
		.addField("info", "Returns general information about a user")
		.addField("avatar [mention]", "Returns avatar of user")
		.addField("ping", "Returns response time of the bot")
		.addField("weather (city)", "Returns weather stats of a city")
		.addField("kick [mention]", "Kicks user from server")
		.setDescription(pages[page-1])
	  const embed02 = new Discord.MessageEmbed()
		.setColor("#D30171")
		.setFooter(`Page ${page} of ${pages.length}`)
		.addField("ban [mention]", "Bans user from server")
		.addField("prune [amount]", "Deletes specific amount of messages.")
		.addField("cat", "returns cute cat picture")
		.addField("floppa", "Returns a picture of swaggy Floppa")
		.setDescription(pages[page-1])
		
      message.channel.send(embed01).then(msg => {
		  
		  msg.react('⏪').then(r => {
			  msg.react('⏩')
			  
			  const backFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
			  const forwFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
			  
			  const back = msg.createReactionCollector(backFilter);
			  const forw = msg.createReactionCollector(forwFilter);
			  
			  back.on('collect', r => {
				  if (page === 1) return;
				  page--;
				  embed01.setDescription(pages[page-1]);
				  embed01.setFooter(`Page ${page} of ${pages.length}`);
				  msg.edit(embed01)
			  })
			  
			  forw.on('collect', r => {
				  if (page === pages.length) return;
				  page++;
				  embed02.setDescription(pages[page-1]);
				  embed02.setFooter(`Page ${page} of ${pages.length}`);
				  msg.edit(embed02)
			  })
			  
		  })
	  })
}};