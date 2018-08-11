require('dotenv').config();
const Discord = require('discord.js');
const Config = require('./config.json');
const Token = process.env.DISCORD_TOKEN;

// console.log(Token);
// console.log(Config);
// console.log(process.env.DISCORD_CLIENT_ID);
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
  console.log(`Logged in as ${bot.user.tag}! It's running on ${bot.guilds.size} servers!`)
  bot.user.setActivity('sup', {type: 'LISTENING'});
});

bot.on('message', async message => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

bot.login(Token);

// console.log(client);

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', msg => {
//   if (msg === 'ping') {
//     msg.reply('Pong!')
//   }
// });

// client.login('token');