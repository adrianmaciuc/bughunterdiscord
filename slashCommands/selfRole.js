const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('selfrole')
		.setDescription('Setup the roles/tech stack you think fits well with your knowledge')
		.addStringOption(option =>
			option.setName('allocate')
				.setDescription('options available to choose')
				.setRequired(true)
				.addChoices(
					{ name: 'Python', value: '1082341163853426688' },
					{ name: 'JavaScript', value: '1082341861655576648' },
					{ name: 'Cucumber', value: '1082341378534674573' },
					{ name: 'HTML', value: '1082341521434607667' },
					{ name: 'API', value: '1082341569337761864' },
					{ name: 'SQL', value: '1082341451784003604' },
					{ name: 'Java', value: '1082340872194117784' },
				)),
	async execute(interaction) {
		const roleID = interaction.options.getString('allocate');
		if (!interaction.member.roles.cache.some(role => role.id === roleID)) {
			await interaction.member.roles.add(roleID)
			await interaction.reply({
				content: `Role added to your user`,
				ephemeral: true,
			})
		}
		else {
			await interaction.reply({
				content: `You already have this role`,
				ephemeral: true,
			})
		}
	},
}