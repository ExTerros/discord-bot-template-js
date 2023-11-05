const { SlashCommandBuilder } = require('discord.js');
const db = require('../../db.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("template")
    .setDescription("Template de commande"),
        execute(interaction) {
          interaction.reply({content: "Tu cherche quoi toi !"})
  }
}