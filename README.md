# bughunterdiscord — Discord Bot 🐞🤖

Overview
- This repository runs a Discord bot built on `discord.js` v14. The bot loads slash commands from `slashCommands/`, message commands from `channelMsgCommands/`, and event handlers from `events/`.

Purpose
- This README contains all manual steps for development and deployment: required environment variables, how to obtain the Discord bot token, where to find `clientId` and `guildId`, and common troubleshooting steps.

Required environment variables (exact names)
- `CUBA_TOKEN` (required) — Discord bot token from the Developer Portal. The code also accepts `cubaToken` for legacy/local use, but set `CUBA_TOKEN` in deployment.
- `prefix` (required) — message command prefix used by the bot (example: `!`).
- `clientId` (required when running `deploy-commands.js`) — Application (Client) ID from the Developer Portal.
- `guildId` (required when running `deploy-commands.js` for guild-scoped registration) — server (guild) ID for fast command deployment.

Where to get each value (manual steps)

- Bot token (`CUBA_TOKEN`) 🔑
  1. Open https://discord.com/developers/applications and sign in.
  2. Create a new application or select your existing one.
  3. In the left menu click **Bot** → **Add Bot** (if not already added).
  4. In the Bot page locate the **Token** section. If you lost the token, click **Reset Token** — the new token will be shown after you click **Reveal/Copy**. Copy it immediately and store it securely.
     - Important: the token is shown only at reveal/reset. The Developer Portal does not display the raw token afterwards.
     - Do NOT add a `Bot ` prefix. Use the raw token string.

- Application ID (`clientId`) 🆔
  1. In the Developer Portal select your application and open **General Information**.
  2. Copy the value labeled **Application ID** and use it as `clientId`.

- Guild ID (`guildId`) 🏷️
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
prefix=!
clientId=YOUR_APPLICATION_ID
guildId=YOUR_GUILD_ID
```

2. Install dependencies and run:

```bash
npm install
npm start
```

Deploying & environment examples
- General: set `CUBA_TOKEN`, `prefix`, and (when needed) `clientId` and `guildId` in your host's environment or secret manager. Use the host UI/CLI — do not commit tokens.

- Heroku example:
```bash
heroku config:set CUBA_TOKEN='your_bot_token_here' prefix='!' clientId='...' guildId='...'
```

- Docker (example run):
```bash
docker run -e CUBA_TOKEN='your_bot_token_here' -e prefix='!' your-image
```

- GitHub Actions (use Secrets):
  - Add `CUBA_TOKEN` as a repository secret (Settings → Secrets).
  - In workflow:
```yaml
env:
  CUBA_TOKEN: ${{ secrets.CUBA_TOKEN }}
  prefix: '!'
  clientId: ${{ secrets.CLIENT_ID }}
  guildId: ${{ secrets.GUILD_ID }}
```

Deploying slash commands (quick guild deploy)
- `deploy-commands.js` registers slash commands to a single guild for fast testing. It requires `CUBA_TOKEN`, `clientId`, and `guildId` set in the environment:

```bash
node deploy-commands.js
```

Verification & safe diagnostics (do not print token)
- Check token presence and metadata (safe):
```bash
node -e "console.log({exists: !!process.env.CUBA_TOKEN, length: process.env.CUBA_TOKEN?.length || 0, startsWithBotPrefix: process.env.CUBA_TOKEN?.startsWith('Bot ')})"
```
- Check other env vars presence:
```bash
node -e "console.log({prefix: !!process.env.prefix, clientId: !!process.env.clientId, guildId: !!process.env.guildId})"
```

Common pitfalls & troubleshooting
- Surrounding quotes: do NOT include quotes when entering the token in a UI. If length is off by 2, you likely added quotes.
- Newlines/truncation: ensure no leading/trailing whitespace or truncated value.
- `Bot ` prefix: do NOT include it. If your value starts with `Bot ` remove it.
- Missing env var: the app exits with a clear message if the token is missing — set `CUBA_TOKEN` in your host.
- Token leaked: immediately Reset Token in the Developer Portal (Bot → Reset Token) and update deployments.

Files of interest
- `index.js` — entrypoint; loads commands/events and logs in using `CUBA_TOKEN`/`cubaToken` and `prefix`.
- `deploy-commands.js` — registers slash commands; uses `CUBA_TOKEN`, `clientId`, and `guildId`.

Security
- Treat `CUBA_TOKEN` like a password: never commit it. Use your host's secret manager and rotate tokens on exposure.

Need help?
- I can add a verification script that checks required env vars (without printing tokens). Reply if you want that added.
