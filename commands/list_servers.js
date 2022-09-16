const { SlashCommandBuilder, codeBlock, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ls')
        .setDescription('List the servers the bot is in'),
    async execute(interaction) {
        if (interaction.user.id != '739219467455823921') {
            return await interaction.reply({content: 'That command is owner only!', ephemeral: true})
        };
        let guilds = [];
        interaction.client.guilds.cache.forEach(guild => {
            guilds.push(`Guild Name: ${guild.name} | Guild ID: ${guild.id} | Member Count: ${guild.memberCount}`)
        });
        await interaction.reply(`${codeBlock(guilds.join('\n'))}`);
    },
};