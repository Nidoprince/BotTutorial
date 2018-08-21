Discord = require("discord.js");

var bot = new Discord.Client();

const token = process.env.TEST_BOT_TOKEN;

bot.on('ready', () =>
{
  console.log("Logged in as "+bot.user.username+" "+bot.user.id+".");
  console.log('I am ready!')
  exports.activeServers = bot.guilds.array();
  for (let value of exports.activeServers)
  {
    console.log(value.name);
  }
})

bot.on("message", (message) =>
{
  if(message.content.substring(0,1) == "!")
  {
    let commandArgs = message.content.substring(1).split(/\s+/)

    if(commandArgs[0] == "hello")
    {
      message.channel.send("Hello "+message.author.username+".  How are you today?");
    }
  }
})

// Log our bot in
bot.login(token);
