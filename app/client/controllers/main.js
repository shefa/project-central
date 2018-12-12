import { Template } from 'meteor/templating';
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

/*
Template.hello.helpers({
  counter() {
    return 1;
  },
});

Template.hello.events({
  'click button'(event, instance) {
  },
});
*/