import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  layout: belongsTo('layout'),
  parent: belongsTo('section', { inverse: 'children' }),
  children: hasMany('section', { inverse: 'parent' }),
  name: attr(),
  top: attr(),
  left: attr(),
  height: attr(),
  width: attr()
});
