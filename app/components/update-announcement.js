export default Ember.Component.extend({
  updateAnnouncement: false,
  actions: {
    updateAnnouncementFormShow() {
      this.set('updateAnnouncement', true);
    },
    update(announcement) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        date: this.get('date'),
      };
      this.set('updateAnnouncement', false);
      this.sendAction('update', announcement, params);
    }
  }
});
