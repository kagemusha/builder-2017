import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr(),
  layout: belongsTo('layout'),
  assetMappings: hasMany('asset-mapping'),

  //buildHtml() {
  //  const layout = this.get('layout');
  //  sections = layout.get('sections');
  //  topSections = sections.filterBy('parent', null);
  //  topSections.map((section) => {
  //
  //  });
  //}
});

/*
construct(element)
    content = getContent(element)
    if content
      return tag + content + closeTag
    elsif children
      return tag + for children(construct(child) + tag
 */