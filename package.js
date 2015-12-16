Package.describe({
    name: 'salesforce:accounts-salesforce',
    version: '0.1.0',
    summary: "Accounts service for Salesforce accounts",
    git: 'https://github.com/Krisa/meteor-accounts-salesforce.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('salesforce:salesforce@0.0.1', ['client', 'server']);

    api.addFiles('salesforce_common.js', ['client', 'server']);
    api.addFiles('salesforce_server.js', 'server');
    api.addFiles('salesforce_client.js', 'client');
});