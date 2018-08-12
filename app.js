require('dotenv').config();
const Discord = require('discord.js');
const Token = process.env.DISCORD_TOKEN;
const findFollows = require('./index')


const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}! It's running on ${bot.guilds.size} servers!`)
});

bot.on('message', message => {
  if (message.content.charAt(0) === '?') {
    let user = message.content.substring(1);
    console.log(user);
    return findFollows.generateUserID(message, user)
  } else if(message.content === "/getjaa") {
    return message.channel.send("Hotfiyah");
  }
});

bot.login(Token);