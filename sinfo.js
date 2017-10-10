const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", () => {
  if (message.content.startsWith("Survius")) {
    message.channel.send("Yeah cahozz");
  }
});

client.login("MzY3MjUwNDU5OTA1NDkwOTQ0.DL4sRA.Oee_ySz9H7vkOkyXpqYQ4-cUqV0");