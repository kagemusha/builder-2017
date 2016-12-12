import Ember from 'ember';

const { computed, inject } = Ember;

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

  store: inject.service('store'),
  template: null,
  viewMode: "html",
  showHtml: computed.equal("viewMode","html"),
  showSlices: computed.equal("viewMode","slices"),
  showSaved: computed.equal("viewMode","assets"),
  tagType: "table",
  assets: [],
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
    saveSlice(name, slice) {
      const asset = this.get('store').createRecord('asset', {name: name, html: slice});
      asset.save().then(()=> {
        this.set('assets', this.get('store').peekAll('asset')); //todo: refine
      });
    },
    templateChanged(templateNum) {
      this.set('template', this.get('templates')[templateNum]);
    },
    didSelectFile(files, resetInput) {
      const fileReader = getFileReadPromise(files[0]);
      fileReader.then(file => {
        this.set("template", file);
        resetInput();
      });
    }
  }
});
