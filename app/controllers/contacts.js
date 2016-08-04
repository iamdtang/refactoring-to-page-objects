import Ember from 'ember';

export default Ember.Controller.extend({
  contacts: Ember.computed('contactSearch', function() {
    if (!this.get('contactSearch')) {
      return this.get('model');
    }
    return this.get('model').filter((contact) => {
      let search = this.get('contactSearch').toLowerCase();
      let inFirstName = contact.get('firstName').toLowerCase().indexOf(search) > -1;
      let inLastName = contact.get('lastName').toLowerCase().indexOf(search) > -1;
      return inFirstName || inLastName;
    });
  })
});
