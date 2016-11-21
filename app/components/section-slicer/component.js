import Ember from 'ember';
import Style from 'builder-2017/util/style';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['canvas'],
  attributeBindings: ['style'],
  isInBlock: false,
  dividers: Ember.A(),

  style: computed('section.width', 'section.height', function(){
    const width = this.get('section.width') + 'px';
    const height = this.get('section.height') + 'px';
    return Style.styleString({width: width, height: height});
  }),



  mouseEnter() {
    this.set('isInBlock', true);
  },
  mouseLeave() {
    this.set('isInBlock', false);
  },
  mouseMove(e) {
    const top = e.clientY - this.element.offsetTop;
    $('.block-cutter').css('top', top);
  },

  click(e) {
    const top = `${e.clientY - this.element.offsetTop}px`;
    const dividers = this.get('dividers');
    dividers.push(Ember.String.htmlSafe(`top:${top}`));
    this.set('dividers', dividers);
    this.notifyPropertyChange('dividers');
  },
});
