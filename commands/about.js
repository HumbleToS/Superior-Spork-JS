const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('General information about the bot!'),
    async execute(interaction) {
        const dev = interaction.client.users.cache.get('739219467455823921');
        const aboutEmbed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle('Superior Spork')
            .setDescription('This is essentially `Superior Spork#0830` but in JavaScript!')
            .addFields(
                { name: 'Developer', value: `${dev.tag}` }
            )
            .addFields(
                { name: 'Latency', value: `${interaction.client.ws.ping}ms` }
            )
            .setTimestamp(new Date());

        await interaction.reply({ embeds: [aboutEmbed] });
    },
};