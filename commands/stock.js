const Discord = require("discord.js")
const db = require("quick.db")
const RichEmbed = require("discord.js")

exports.run = async (client, message, args) => {
  
  let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  let stock1 = await db.fetch(`stockquest`)
  const stockembed = new Discord.RichEmbed()
              .setTitle("Stock")
              .setDescription("")
              .addField("Crunchyroll |", `**None**`)
              .addField("Funimation |", `**None**`)
              .addField("Hulu |", `**None**`)
              .addField("Spotify |", `**None**`)
              .addField("Vrv |", `**None**`)
              .setColor(hex)
    .setFooter("Watermelon Gen")

message.channel.send(stockembed)
}