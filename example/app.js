if (Meteor.isClient) {
    //handle the "callback" this way if you choose a "redirect" loginStyle:
    Accounts.onLogin(function(){
        console.log('Success Login')
    });
    Accounts.onLoginFailure(function() {
        console.log('Failed Login');
    });

    //buttons binding
    Template.login.events({
        'click #salesforce-login': function(event) {
            Meteor.loginWithSalesforce(function(err) {
                console.log('callback', arguments);
                if (err) {
                    throw new Meteor.Error('Salesforce login failed', err);
                }
            });
        },
        'click #logout': function(event) {
            Meteor.logout(function(err) {
                if (err) {
                    throw new Meteor.Error('Logout failed');
                }
            })
        }
    });
}


//This is an example! For a production application, you should move this code on the server 
//due to sensitive information around consumer key and consumer secret. 
//additionally, you may use a settings.json instead, which will do the same for you.
if (Meteor.isServer) {
    Meteor.startup(function() {
        ServiceConfiguration.configurations.upsert({
            service: 'salesforce'
        }, {
            $set: {
                consumerKey: 'consumer key',
                consumerSecret: 'consumer secret',
                requestPermissions: ['api', 'refresh_token'],  //optional, default to 'api'
                loginStyle: 'popup' // optional, default to 'popup'
            }
        });
    });
}