import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  init() {

  },
  emailTemplates: hasMany('email-templates'),
  sections: hasMany('section')
});


/*
operations
- add vsection
- delete vsection
- add subsection
- delete subsections


list
{id: 1, parent: null, attrs: {x,y,h,w,styles} }
{id: 2, parent: 1, attrs: {...} }
{id: 3, parent: 1, attrs: {...} }
{id: 4, parent: 3, attrs: {...} }
{id: 5, parent: 3, attrs: {...} }
{id: 6, parent: 3, attrs: {...} }

delete lines or blocks?

 */
