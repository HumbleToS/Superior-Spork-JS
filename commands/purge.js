const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purge messages in a channel!')
        .addStringOption(option => 
            option.setName('what-to-purge')
                .setDescription('Purge specific messages, all or bot messages only!')
                .setRequired(true)
                .addChoices(
                    { name: 'all', value: 'Purge any message in chat!' },
                    { name: 'user', value: 'Purge a user\'s messages\'s in chat!' },
                    { name: 'bot', value: 'Purge only bot messages' }
                )
            ),
    async execute(interaction) {
        // do stuff
    },
};