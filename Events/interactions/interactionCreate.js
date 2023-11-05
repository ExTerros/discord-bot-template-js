const db = require('../../db.js');
const config = require("../../config.json");
const template = require('../../Commands/General/template.js');


module.exports = {
  name: "interactionCreate",

  execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      command.execute(interaction, client);
      if (client.user.id == config.clientId) {
        client.channels.cache.get(config.channelsLogs).send(`**${interaction.user.tag}** à fait la commands **/${interaction.commandName}** dans le channel **#${interaction.channel.name}** du serveur **${interaction.guild.name}**`);
      }
      console.log(
        `"${interaction.user.tag}" à fait la commands "/${interaction.commandName}" dans le channel "#${interaction.channel.name}" du serveur "${interaction.guild.name}"`
      );

    } else if (interaction.isButton()) {
      const { customId } = interaction;

      if (client.user.id == config.clientId) {
        client.channels.cache.get(config.channelsLogs).send(`**${interaction.user.tag}** à utilisé le bouton **${interaction['customId']}**`);
      }

      console.log(
        `${interaction.user.tag} button`
      );
    }
  },
};
