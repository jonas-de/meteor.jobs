Package.describe({
	name: 'wildhart:jobs',
	version: '2.0.1',
	summary: 'Schedule jobs to run at a later time, including multi-server, super efficient',
	git: 'https://github.com/wildhart/meteor.jobs',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom(['3.0']);
	api.use(["typescript@3.0.0 || 4.0.0 || 5.0.0", "mongo", "random", "ecmascript", "check"], "server");
	api.mainModule("jobs.ts", "server");
	api.export(["Jobs", "TypedJob"]);
});
