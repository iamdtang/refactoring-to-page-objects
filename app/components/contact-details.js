import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['data-test'],
  'data-test': 'contact'
});
