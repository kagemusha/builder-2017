import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  layout: belongsTo('layout'),
  assetMappings: hasMany('asset-mapping'),
});
