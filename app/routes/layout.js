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
    addSection(name) {
      const layout = this.modelFor('layout');
      const section = this.get('store').createRecord('section', {layout, name});
      section.save().then(()=>{
        this.controllerFor('layout').set('newSectionName', '');
        this.refresh();
      });
    }
  }
});
