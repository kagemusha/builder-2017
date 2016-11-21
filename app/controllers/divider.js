import Ember from 'ember';

export default Ember.Controller.extend({
  nums: Ember.A([1]),
  actions: {
    addNum(num) {
      this.get('nums').push(num);
    }
  }
});
