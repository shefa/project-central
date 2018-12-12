import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.users.find().count()<4)
  {
  	console.log("Creating testing accounts of each kind");
  	
	Accounts.createUser( {
	    email:  'leader@test.com',
	    password: '123leader',
	    profile: {
	        leader: true
	    }
	});

	Accounts.createUser( {
	    email:  'client@test.com',
	    password: '123client',
	    profile: {
	        client: true
	    }
	});

	Accounts.createUser( {
	    email:  'supervisor@test.com',
	    password: '123supervisor',
	    profile: {
	        supervisor: true
	    }
	});

	Accounts.createUser( {
	    email:  'student@test.com',
	    password: '123student',
	    profile: {}
	});
  }
});
