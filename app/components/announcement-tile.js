import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    update(announcement, params){
      this.sendAction('update', announcement, params);
    },

    delete(announcement){
      if(confirm('Are you sure you want to delete this item?')){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
