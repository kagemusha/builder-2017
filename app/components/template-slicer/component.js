import Ember from 'ember';
import meetupTemplate from '../../example_emails/meetup';
import uniqloTemplate from '../../example_emails/uniqlo';

const { computed } = Ember;

function getFileReadPromise(file) {

  const promise = new Ember.RSVP.Promise(function(resolve){

    const reader = new FileReader();
    reader.onload = function(readEvent){
      resolve({name: file.name, html: readEvent.target.result});
    };
    reader.readAsBinaryString(file);

  });

  return promise;
}


export default Ember.Component.extend({

  templates: [meetupTemplate, uniqloTemplate],
  template: meetupTemplate,
  viewMode: "html",
  showHtml: computed.equal("viewMode","html"),
  showSlices: computed.equal("viewMode","slices"),
  showSaved: computed.equal("viewMode","savedSlices"),
  tagType: "table",
  savedSlices: [],
  slices: computed('template.html', 'tagType', function(){
    const dom = Ember.$(this.get('template.html'));
    try {
      const elems = Ember.$(dom).find(this.get('tagType'));
      return elems.toArray().map(elem => elem.outerHTML);
    } catch(e) {
      return [];
    }
  }),
  actions: {
    viewChanged(val) {
      this.set('viewMode', val);
    },
    saveSlice(i) {
      const slice = this.get("slices").objectAt(i);
      this.get('savedSlices').push(slice.slice());
    },
    templateChanged(templateNum) {
      this.set('template', this.get('templates')[templateNum]);
      this.set('savedSlices', []);
    },
    didSelectFile(files, resetInput) {
      const fileReader = getFileReadPromise(files[0]);
      fileReader.then(file => {
        this.set("template", file);
        resetInput();
      })
    }
  }
});
