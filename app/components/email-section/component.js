import Ember from 'ember';

const { get, computed } = Ember;

export default Ember.Component.extend({
  classNames: ['section-selector'],
  asset: null,
  clickedSelect: false,
  isPreview: computed.equal('mode', 'preview'),
  isSelectingAsset: computed('asset', function(){
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
