Package.describe({
	name: 'djk:highlightjs',
	version: '9.7.0',
	summary: 'Load highlight.js into your Meteor project.',
	git: 'https://github.com/djkmiles/meteor-highlightjs.git',
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.versionsFrom('1.4')
	api.use('ui', 'client');
    api.addFiles(['lib/js/highlight.pack.js', 'lib/css/zenburn.css'], 'client');
});
