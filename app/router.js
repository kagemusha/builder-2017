import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('designer');
  this.route('slicer');
  this.route('layout', {path: 'layouts/:layout_id'});
  this.route('email', {path: 'email/:email_template_id'});
  this.route('divider');
});

export default Router;
