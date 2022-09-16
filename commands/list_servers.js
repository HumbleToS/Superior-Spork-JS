const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ls')
        .setDescription('List the servers the bot is in'),
    async execute(interaction) {
        await interaction.reply(`test ${interaction.client.guilds.cache.size} servers`)
    },
};