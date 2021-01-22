const Eris = require('eris');
const config = require('./config.json');

const bot = new Eris.CommandClient(config.token, {}, {
    prefix: "?"
});

bot.on("ready", () => {
	console.log("ballin'");
	bot.editStatus('idle', { name: 'with Floppa', type: 0});
});

const avatar = bot.registerCommand("avatar", (msg, args) => {
    if(msg.author.bot) return;
    const data = {
        "embed": {
          "title": "-Avatar URL-",
          "url": msg.author.staticAvatarURL,
          "color": 16580705,
          "image": {
            "url": msg.author.avatarURL
          },
          "author": {
            "name": msg.author.username + "'s Avatar",
          }
        }
      };
    
        bot.createMessage(msg.channel.id, data);
});


bot.connect();
