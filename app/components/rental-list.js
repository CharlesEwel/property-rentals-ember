import Ember from 'ember';

export default Ember.Component.extend({
  sortedRentals: Ember.computed.sort('rentals', 'sortDefinition'),
  sortBy: 'rate',
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function(){
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [`${this.get('sortBy')}:${sortOrder}`];
  }),
});
