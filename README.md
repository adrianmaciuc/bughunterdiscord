# bughunterdiscord — Discord Bot 🐞🤖

Overview

- This repository runs a Discord bot built on `discord.js` v14. The bot loads slash commands from `slashCommands/`, message commands from `channelMsgCommands/`, and event handlers from `events/`.

Purpose

- This README contains all manual steps for development and deployment: required environment variables, how to obtain the Discord bot token, where to find `clientId` and `guildId`, and common troubleshooting steps.

Required environment variables (exact names)

- `CUBA_TOKEN` (required) — Discord bot token from the Developer Portal. The code also accepts `cubaToken` for legacy/local use, but set `CUBA_TOKEN` in deployment.
- `PREFIX` (required) — message command prefix used by the bot (example: `!`).
- `CLIENT_ID` (required when running `deploy-commands.js`) — Application (Client) ID from the Developer Portal.
- `GUILD_ID` (required when running `deploy-commands.js` for guild-scoped registration) — server (guild) ID for fast command deployment.

Where to get each value (manual steps)

- Bot token (`CUBA_TOKEN`) 🔑
  1. Open https://discord.com/developers/applications and sign in.
  2. Create a new application or select your existing one.
  3. In the left menu click **Bot** → **Add Bot** (if not already added).
  4. In the Bot page locate the **Token** section. If you lost the token, click **Reset Token** — the new token will be shown after you click **Reveal/Copy**. Copy it immediately and store it securely.
     - Important: the token is shown only at reveal/reset. The Developer Portal does not display the raw token afterwards.
     - Do NOT add a `Bot ` prefix. Use the raw token string.

- Application ID (`CLIENT_ID`) 🆔
  1. In the Developer Portal select your application and open **General Information**.
  2. Copy the value labeled **Application ID** and use it as `clientId`.

- Guild ID (`GUILD_ID`) 🏷️
  1. In the Discord app (desktop/web) enable Developer Mode: **User Settings → Advanced → Developer Mode** ON.
  2. Right-click the server icon (left sidebar) for the server you control and choose **Copy ID**. Paste that value as `guildId`.

Invite the bot to a server (manual)

- Use this invite URL (replace `<clientId>`):
  `https://discord.com/oauth2/authorize?client_id=<clientId>&scope=bot%20applications.commands&permissions=8`
- Open the URL, select your server, and authorize the bot (you must have Manage Server or admin privileges).

Local development — quick start

1. Create a `.env` file in project root (do NOT commit it). Example:

```
CUBA_TOKEN=your_bot_token_here
PREFIX=!
CLIENT_ID=YOUR_APPLICATION_ID
GUILD_ID=YOUR_GUILD_ID
```

2. Install dependencies and run:

```bash
npm install
npm start
```

Deploying slash commands (quick guild deploy)

- `deploy-commands.js` registers slash commands to a single guild for fast testing. It requires `CUBA_TOKEN`, `clientId`, and `guildId` set in the environment:

```bash
node deploy-commands.js
```
