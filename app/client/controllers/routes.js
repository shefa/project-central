import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/* this is responsible for highlighting the current active path from the tab views */
function wait_for_x(path,i)
{
    if(i>10) return;
    var x = $('a[href="'+path+'"]');
    if(x.length==0) return Meteor.setTimeout(function(){wait_for_x(path,i+1);},300);
    x.addClass("active");
}

FlowRouter.triggers.enter([function(context){wait_for_x(context.path,0);}]);
FlowRouter.triggers.exit([function(context){$('a[href="'+context.path+'"]').removeClass("active");}]);

FlowRouter.notFound = {
  action() { BlazeLayout.render('app', { main: 'notFound' }); },
};

FlowRouter.route('/', {
  name: 'home',
  action() { BlazeLayout.render('app', { main: 'home' }); },
});

FlowRouter.route('/tools', {
  name: 'Student.tools',
  action() { if(Meteor.user()) BlazeLayout.render('app', { main: 'tools' }); else FlowRouter.go('home');},
});

FlowRouter.route('/log', {
  name: 'Student.log',
  action() { if(Meteor.user()) BlazeLayout.render('app', { main: 'log' }); else FlowRouter.go('home');},
});

FlowRouter.route('/schedule', {
  name: 'Student.schedule',
  action() { if(Meteor.user()) BlazeLayout.render('app', { main: 'schedule' }); else FlowRouter.go('home');},
});

FlowRouter.route('/files', {
  name: 'Student.files',
  action() { if(Meteor.user()) BlazeLayout.render('app', { main: 'files' }); else FlowRouter.go('home');},
});

FlowRouter.route('/coursework', {
  name: 'Student.coursework',
  action() { if(Meteor.user()) BlazeLayout.render('app', { main: 'coursework' }); else FlowRouter.go('home');},
});

FlowRouter.route('/contribution', {
  name: 'Supervisor.contribution',
  action() { if(Meteor.user()&&Meteor.user().profile&&Meteor.user().profile['supervisor']) 
              BlazeLayout.render('app', { main: 'contribution' }); 
            else FlowRouter.go('home');},
});

FlowRouter.route('/groups', {
  name: 'Supervisor.groups',
  action() { if(Meteor.user()&&Meteor.user().profile&&Meteor.user().profile['supervisor']) 
              BlazeLayout.render('app', { main: 'supervisor_groups' }); 
            else FlowRouter.go('home');},
});