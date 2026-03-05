// Utility to sanitize embed objects so they meet Discord limits
const LIMITS = {
	TITLE: 256,
	DESCRIPTION: 4096,
	FIELD_NAME: 256,
	FIELD_VALUE: 1024,
	FOOTER_TEXT: 2048,
	AUTHOR_NAME: 256,
};

function truncate(str, max) {
	if (typeof str !== 'string') return str;
	if (str.length <= max) return str;
	return str.slice(0, max - 1) + '\u2026'; // add ellipsis
}

function sanitizeEmbed(embed) {
	if (!embed || typeof embed !== 'object') return embed;
	const e = { ...embed };

	if (e.title) e.title = truncate(e.title, LIMITS.TITLE);
	if (e.description) e.description = truncate(e.description, LIMITS.DESCRIPTION);

	if (e.footer && e.footer.text) e.footer = { ...e.footer, text: truncate(e.footer.text, LIMITS.FOOTER_TEXT) };
	if (e.author && e.author.name) e.author = { ...e.author, name: truncate(e.author.name, LIMITS.AUTHOR_NAME) };

	if (Array.isArray(e.fields)) {
		e.fields = e.fields.slice(0, 25).map((f) => ({
			name: truncate(f.name, LIMITS.FIELD_NAME),
			value: truncate(f.value, LIMITS.FIELD_VALUE),
			inline: !!f.inline,
		}));
	}

	return e;
}

module.exports = { sanitizeEmbed };
