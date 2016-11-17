import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  layout: belongsTo('layout'),
  name: attr(),
  x: attr(),
  y: attr(),
  height: attr(),
  width: attr()
});
