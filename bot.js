const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content ==='!gay') {
        message.reply('You');
    }
});

client.on('message', message => {
    if (message.content ==='!hanzo') {
        message.reply('I was created by Yuri Petrakovich#1145 and also I was determined to be a salty bot.');
    }
});

client.on('message', message => {
    if (message.content ==='!hanzohelp') {
        message.reply('Hanzo here is to help! Type ping to pong you. !hanzo to know more about me. !gay to know who is actually gay in this server.');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
