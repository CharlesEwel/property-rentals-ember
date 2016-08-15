import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     var rentalArray=(this.store.findAll('rental'));
     console.log(rentalArray);
     return rentalArray;
   },

   actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
