const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('General information about the bot!'),
    async execute(interaction) {
        start = new Date().getTime();
        await interaction.channel.sendTyping();
        end = new Date().getTime();
        const dev = interaction.client.users.cache.get('739219467455823921');
        const aboutEmbed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle('Superior Spork')
            .setDescription(`This is essentially \`Superior Spork#0830\` but in JavaScript!\nBot was started on <t:${interaction.client.start_time}:f>`)
            .addFields([
                { name: 'Developer', value: `${dev.tag}` },
                { name: 'Bot Latency', value: `Latency: \`${end-start}ms\`\nAPI latency: \`${interaction.client.ws.ping}ms\`` }
            ])
            .setTimestamp();
        await interaction.reply({ embeds: [aboutEmbed] });
    },
};