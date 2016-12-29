import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  emailTemplate: belongsTo('email-template'),
  asset: belongsTo('asset'),
  section: belongsTo('section'),
});
