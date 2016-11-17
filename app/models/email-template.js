import DS from 'ember-data';

const { belongsTo, hasMany } = DS;

export default DS.Model.extend({
  layout: belongsTo('layout'),
  assetMappings: hasMany('asset-mapping'),
});
