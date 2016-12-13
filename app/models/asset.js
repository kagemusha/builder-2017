import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  html: attr(),
  name: attr(),
  x: attr(),
  y: attr(),
  height: attr(),
  width: attr(),
  assetMapping: hasMany('asset-mappings'),
});
