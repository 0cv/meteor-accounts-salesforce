# meteor-accounts-salesforce

A meteor package for Salesforce's login service.

### Package Dependencies
* accounts-base
* accounts-oauth
* oauth
* oauth2
* base64
* http
* service-configuration
* salesforce:accounts-salesforce

### Installation
```
meteor add salesforce:salesforce
```

### Configuration
You can then call in your client JS the loginWithSalesforce method as follow:
```javascript
var opts = {
	requestPermissions: ['api', 'chatter_api', 'id', 'full', 'openid', 'refresh_token', 'visualforce', 'web'],  //optional, default to 'api'
	endPoint: 'test.salesforce.com', //optional, default to login.salesforce.com
};
Meteor.loginWithSalesforce(opts, function (err) {
	if (err) Session.set('errorMessage', err.reason || 'Unknown error');
});
```
`opts` is a fully optional parameter. You may remove it if you don't need it (and put the callback as first parameter)

For the `consumer key` and `consumer secret`, you may call `ServiceConfiguration on the server when the application starts:
```javascript
Meteor.startup(function() {
    ServiceConfiguration.configurations.upsert({
        service: 'salesforce'
    }, {
        $set: {
            consumerKey: 'Consumer Key from Salesforce connected app',
            consumerSecret: 'Consumer Secret from Salesforce connected app',
            requestPermissions: ['api', 'refresh_token'],  //optional, default to 'api' and/or may be overwritten by the client
            endPoint: 'test.salesforce.com', //optional, default to login.salesforce.com and/or may be overwritten by the client
            loginStyle: 'popup' // optional, default to 'popup'
        }
    });
});
```

Finally, instead of having to call `ServiceConfiguration` when the application starts, you may run `Meteor` as follow `meteor run --settings settings.json` and place following in `settings.json` in the root of your application:
```JSON
{
	"public": {
		"salesforce": {
			"requestPermissions": ["api", "refresh_token"],
        	"loginStyle": "popup",
       		"consumerKey": "Consumer Key from Salesforce connected app"
		}
	},
	"salesforce" : {
        "consumerSecret": "Consumer Secret from Salesforce connected app"
    }
}
```
### Example
Please have a look at the `example` folder for a very simple login/logout app to Salesforce.

