import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('layout');
  },

  actions: {
    save(name) {
      const layout = this.get('store').createRecord('layout', {name: name});
      layout.save().then(()=>{
        this.refresh();
      });
    }
  }
});
