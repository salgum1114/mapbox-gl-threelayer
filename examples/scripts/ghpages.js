const ghpages = require('gh-pages');

ghpages.publish(
	'out',
	{
		repo: 'https://github.com/salgum1114/mapbox-gl-threelayer.git',
		message: 'published https://salgum1114.github.io/mapbox-gl-threelayer',
		user: {
			name: 'salgum1114',
			email: 'salgum1112@gmail.com',
		},
		dotfiles: true,
	},
	function (err) {
		if (err) {
			console.error(err);
		} else {
			console.log('published https://salgum1114.github.io/mapbox-gl-threelayer');
		}
	},
);
