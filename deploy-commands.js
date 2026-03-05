const { REST, Routes } = require("discord.js");
require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandsPath = path.join(__dirname, "slashCommands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
  const command = require(`./slashCommands/${file}`);
  commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
// Accept either camelCase `cubaToken` (used locally) or uppercase `CUBA_TOKEN` (common in hosts)
const apiToken = process.env.cubaToken || process.env.CUBA_TOKEN;
if (!apiToken || typeof apiToken !== "string" || apiToken.trim().length === 0) {
  console.error(
    "FATAL: Discord API token missing. Please set CUBA_TOKEN (or cubaToken) environment variable.",
  );
  process.exit(1);
}
const rest = new REST({ version: "10" }).setToken(apiToken);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`,
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID,
      ),
      { body: commands },
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
