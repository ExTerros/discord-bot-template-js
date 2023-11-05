const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong"),
        execute(interaction, client) {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            const pingEmbed = new EmbedBuilder()
	        .setColor(randomColor)
	        .setTitle(`:ping_pong: ${client.ws.ping}ms! :ping_pong:`)
            interaction.reply({ embeds: [pingEmbed] }) // visible pour l'utilisateur qui fait la commands
        }
}