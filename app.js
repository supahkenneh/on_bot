require('dotenv').config();
const Discord = require('discord.js');
const Config = require('./config.json');
const Token = process.env.DISCORD_TOKEN;

const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', () => {
  console.log(bot);
  // message.reply(`${bot.user.tag} online!`)
  console.log(`Logged in as ${bot.user.tag}! It's running on ${bot.guilds.size} servers!`)
  // bot.user.setActivity('sup', {type: 'LISTENING'});
});

bot.on('message', message => {
  if (message.content === "?livenow") {
    //on command, will notify that user is streaming
    message.channel.send("*twitch user* is streaming now!");
  }
});

bot.login(Token);