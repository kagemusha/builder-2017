import Ember from 'ember';

export default Ember.Route.extend({
  newSectionName: "",

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
