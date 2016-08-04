import DS from 'ember-data';

let { attr, Model } = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  title: attr('string'),
  job: attr('string'),
  jobDescription: attr('string')
});
