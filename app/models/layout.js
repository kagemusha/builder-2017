import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  sections: hasMany('section'),
  name: attr(),
});
