import Ember from 'ember';

export default Ember.Route.extend({
  newSectionName: "",

  setupController(controller, model) {
    this._super(controller, model);
    this.store.findAll('asset').then((assets)=>{
      controller.set('assets', assets);
    });
  },
  actions: {
  }
});
