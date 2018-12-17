const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const discord = require("discord.js");

const bot = new discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("on sourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.iconURL;
  let server = new discord.RichEmbed()
  .setDescription("server information")
  .setColor("#2775f4")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);


  return message.channel.send(serverembed);
}



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new discord.Richembed()
    .setDescription("Bot Information")
    .setColor("#2775f4")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

});

bot.login(tokenfile.token);
