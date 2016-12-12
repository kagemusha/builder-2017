import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  html: attr(),
  name: attr(),
  x: attr(),
  y: attr(),
  height: attr(),
  width: attr()
});
