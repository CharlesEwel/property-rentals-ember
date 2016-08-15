import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('announcements');
  this.route('rental', {path: '/rental/:rental_id'});
  this.route('announcement', {path: '/announcement/:announcement_id'});
});

export default Router;
