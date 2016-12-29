import Ember from 'ember';

export default Ember.Controller.extend({
  mode: "design",

  actions: {
    setMode(mode) {
      this.set('mode', mode);
    },
    export() {
      window.alert('Exported! (really ;-)')
    }
  }
});