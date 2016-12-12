import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(slice ) {
      const name = this.get('name');
      this.get('save')(name, slice);
    }
  }
});
