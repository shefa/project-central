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


FlowRouter.route('/', {
  name: 'App.home',
  action() { BlazeLayout.render('App_body', { main: 'home_page' }); },
});

FlowRouter.notFound = {
  action() { BlazeLayout.render('App_body', { main: 'App_notFound' }); },
};
