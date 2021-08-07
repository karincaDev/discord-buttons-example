const Discord = require("discord.js");
const client = new Discord.Client()
const { MessageButton } = require("discord-buttons")

//ENTER YOUR HANDLER

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
.setTitle(`Testing Button | karincaDev`)
.setDescription('`[ CLICK TO THE BUTTON FOR FREE FOODS ]`')
 
let karincabutton = new MessageButton()
.setStyle('https://discord.com/') //enter your url
.setLabel('Test Button') //default: NO_LABEL_PROVIDED
.setURL('https://youtube.com') //note: if you use other style you must provide id using .setID('myid')
.setID('karincadev.test')

message.channel.send({ embed: embed, ephemeral: true, buttons: [ karincabutton ]});
    
   client.on('clickButton', async (button) => {
  if (button.id === 'karincadev.test') {
    button.channel.send(`${button.clicker.user.tag} clicked to the button!`);
  }
});                                  
}}

//This is basic example of discord button module, If have any problems please contact me from discord: karinca#0001
