if (Meteor.isClient) {
  Meteor.loginWithSalesforce = function (options, callback) {
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Salesforce.requestCredential(options, credentialRequestCompleteCallback);
  };
}
