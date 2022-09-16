const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js')
const fs = require('node:fs');
const path = require('node:path');

const { token } = require(fs.existsSync('./altconfig.json') ? './altconfig.json' : './config.json');

const client = new Client({
    allowedMentions: {
        parse: ['users'],
        roles: false,
        everyone: false,
        repliedUser: true
    },
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

client.commands = new Collection();
client.startTime = Math.round(new Date().getTime() / 1000);

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
    console.log(`Loaded command ${command.data.name}`);
}

client.once('ready', () => {
    console.log("Bot has started");

    client.user.setPresence({ 
        activities: [{ 
            name: ` over ${client.guilds.cache.size} servers`, 
            type: ActivityType.Watching 
        }], 
        status: 'dnd' 
    });
});

client.on("guildCreate", async(guild) => {
    client.user.setPresence({ 
        activities: [{ 
            name: ` over ${client.guilds.cache.size} servers`, 
            type: ActivityType.Watching 
        }], 
        status: 'dnd' 
    });
});

client.on("guildDelete", async(guild) => {
    client.user.setPresence({ 
        activities: [{ 
            name: ` over ${client.guilds.cache.size} servers`, 
            type: ActivityType.Watching 
        }], 
        status: 'dnd' 
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(token);