const config = require("../../config.json");
const { EmbedBuilder } = require('discord.js');


module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        if (client.user.id == config.clientId) {
            let guildCount = await client.guilds.fetch();
                    
            let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            const ChannelLog = new EmbedBuilder()
            .setColor(randomColor)
            .setTitle('Je suis en Ligne')
            .setDescription(`Je suis utilisé par **${usersCount}** utilisateurs sur **${guildCount.size}** serveurs !`)
            .setTimestamp()

            guildCount.forEach((ServerUseTheBot, index) => {
                ChannelLog.addFields(
                    { name: ServerUseTheBot['name'], value: index, inline: true },
                )
            });

            client.channels.cache.get(config.channelsLogs).send({ embeds: [ChannelLog] });
            client.user.setActivity('/help to get all commands');
            console.log(`${ client.user.username } es en ligne !`);
        }else{
            console.log(`${ client.user.username } es en ligne !`);
            client.user.setActivity('Je suis un bon dev');
        }
    },
}