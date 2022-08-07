const { Client } = require('discord.js');
require("dotenv").config()

const client = new Client({
  intents: ['Guilds', 'GuildMessages', 'MessageContent'],
});

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {
    console.log(message.content)
  if (message.content.includes('dn')) {
    return message.reply('deez nuts haha gotem');
  }

  if (message.content === '!help') {
    return message.reply("there's no help lmao");
  }
  if (message.content === 'hi') {
    return message.reply("Hello Human");
  }
});
// possible ideas: Use weather api, have bot respond with weather at a location with !weather
client.login(process.env.TOKEN);


