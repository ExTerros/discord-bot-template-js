const { ComponentType, EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription("Affiche une liste de toute les commandes du bot"),
    async execute(interaction) {
        const emojis = {
            info: "📝",
            general: "⚙️",
            dev: "💻",
            card: "💻",
        };

        const directories = [
          ...new Set(interaction.client.commands.map((cmd) => cmd.folder)),
        ];
    
        const formatString = (str) =>
          `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
    
        const categories = directories.map((dir) => {
          const getCommands = interaction.client.commands
            .filter((cmd) => cmd.folder === dir)
            .map((cmd) => {
              return {
                name: cmd.data.name,
                description:
                  cmd.data.description ||
                  "Il n'y à pas de déscription pour cette commande",
              };
            });
    
          return {
            directory: formatString(dir),
            commands: getCommands,
          };
        });

        const embed = new EmbedBuilder().setDescription(
          "Choisissez une catégorie dans le menu déroulant"
        );
    
        const components = (state) => [
          new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
              .setCustomId("help-menu")
              .setPlaceholder("Choisissez une catégorie")
              .setDisabled(state)
              .addOptions(
                categories.map((cmd) => {
                  return {
                    label: cmd.directory,
                    value: cmd.directory.toLowerCase(),
                    description: `Commandes de la catégorie ${cmd.directory}.`,
                    emoji: emojis[cmd.directory.toLowerCase() || null],
                  };
                })
              )
          ),
        ];

        const initialMessage = await interaction.reply({
          embeds: [embed],
          components: components(false),
          ephemeral: true
        });
    
        const filter = (interaction) =>
          interaction.user.id === interaction.member.id;
    
        const collector = interaction.channel.createMessageComponentCollector({
          filter,
          componentType: ComponentType.SelectMenu, ephemeral: true,
        });
    
        collector.on("collect", (interaction) => {
          const [directory] = interaction.values;
          const category = categories.find(
            (x) => x.directory.toLowerCase() === directory
          );
    
          const categoryEmbed = new EmbedBuilder()
            .setTitle(`${formatString(directory)} commandes`)
            .setDescription(
              `Une liste de toutes les commandes classées sous ${directory}`
            )
            .addFields(
              category.commands.map((cmd) => {
                return {
                  name: `\`${cmd.name}\``,
                  value: cmd.description,
                  inline: true,
                };
              })
            );
    
          interaction.update({ embeds: [categoryEmbed], ephemeral: true });
        });
    
        collector.on("end", () => {
          initialMessage.edit({ components: components(true), ephemeral: true });
        });
    
  }
}