import Ember from 'ember';

const { get, computed } = Ember;

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    const section = get(this, "section");
    this.get('email.assetMappings').then(assetMappings => {
      const mapping = assetMappings.findBy("section.id", section.id);
      if (mapping) {
        this.set('asset', get(mapping, "asset"));
      }
    });
  },

  classNames: ['section-selector'],
  asset: null,
  clickedSelect: false,
  isPreview: computed.equal('mode', 'preview'),
  isSelectingAsset: computed('asset','clickedSelect', function(){
    return get(this, 'clickedSelect') || Ember.isBlank(get(this, 'asset'));
  }),
  click() {
    this.toggleProperty('clickedSelect');
  },
  actions: {
    selectedAsset(asset) {
      this.set('clickedSelect', false);
      this.set('asset', asset);
    }
  }
});
