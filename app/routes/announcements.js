import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    save3(params){
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
    },

    update(announcement, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined && params[key] !== "") {
          announcement.set(key, params[key]);
        }
      })
      announcement.save();
      this.transitionTo('announcements')
    },

    destroyAnnouncement(announcement){
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
