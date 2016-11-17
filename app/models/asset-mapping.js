import DS from 'ember-data';

const { belongsTo } = DS;

export default DS.Model.extend({
  emailTemplate: belongsTo('email-template'),
  section: belongsTo('section'),
  asset: belongsTo('asset')
});
