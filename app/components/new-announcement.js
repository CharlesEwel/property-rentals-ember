import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },
    save1(){
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        date: this.get('date')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save2', params);
    }
  }

});
