Package.describe({
  summary: "Accounts service for Salesforce accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('salesforce', ['client', 'server']);

  api.add_files(['salesforce_login_button.css'], 'client');

  api.add_files('salesforce_common.js', ['client', 'server']);
  api.add_files('salesforce_server.js', 'server');
  api.add_files('salesforce_client.js', 'client');
});
