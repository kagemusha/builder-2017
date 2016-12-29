import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  model() {
    const models = {
      layouts: this.get('store').findAll('layout'),
      emailTemplates: this.get('store').findAll('email-template'),
    };
    return Ember.RSVP.hash(models).then(models => models);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('layouts', get(model, 'layouts'));
    controller.set('emailTemplates', get(model, 'emailTemplates'));
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
