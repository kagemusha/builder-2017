import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('section', {height: 400, width: 400});
  },

  actions: {
    colorChanged(color) {
      console.log("col", color);
    }
  },
});
