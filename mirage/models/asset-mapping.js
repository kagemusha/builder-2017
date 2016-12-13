import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  asset: belongsTo('asset'),
  section: belongsTo('section'),
});
