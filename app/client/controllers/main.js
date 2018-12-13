import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import '../views/main.html';

Template.menu.helpers({
  availableTabs() {
  	if(Meteor.user().profile){
	    if(Meteor.user().profile['leader']) return ['Assessment', 'Groups', 'Projects','Students','Clients'];
	    if(Meteor.user().profile['client']) return ['Project', 'Progress', 'Meetings'];
	    if(Meteor.user().profile['supervisor']) return ['Groups', 'Contribution'];
	}
    return ['Brief','Coursework','Files','Schedule','Log','Tools'];
  },
});

Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-logout': function (event) { FlowRouter.go('App.home');}
})