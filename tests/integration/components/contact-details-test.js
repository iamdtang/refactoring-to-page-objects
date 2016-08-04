import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import page from 'refactoring-to-page-objects/tests/pages/contacts';

moduleForComponent('contact-details', 'Integration | Component | contact details', {
  integration: true,
  beforeEach() {
    page.setContext(this);
    this.set('contact', {
      firstName: 'Dwayne',
      lastName: 'Johnson',
      title: 'The Rock',
      job: 'Actor',
      jobDescription: 'some job description'
    });
  },
  afterEach() {
    page.removeContext(this);
  }
});

test('it renders the contact', function(assert) {
  this.render(hbs`{{contact-details contact=contact}}`);
  assert.equal(this.$('h3').text().trim(), 'Dwayne Johnson');
  assert.equal(this.$('[data-test="details"]').length, 0);
  this.$('h3').click();
  assert.equal(this.$('[data-test="details"]').length, 1);
  assert.equal(this.$('[data-test="title"]').text().trim(), 'The Rock');
  assert.equal(this.$('[data-test="job"]').text().trim(), 'Actor');
  assert.equal(this.$('[data-test="job-description"]').text().trim(), 'some job description');
});

test('it renders the contact', function(assert) {
  page.render(hbs`{{contact-details contact=contact}}`);
  assert.equal(page.contacts(0).fullName, 'Dwayne Johnson');
  assert.ok(page.contacts(0).detailsHidden);
  page.contacts(0).clickOnName();
  assert.ok(page.contacts(0).detailsShown);
  assert.equal(page.contacts(0).title, 'The Rock');
  assert.equal(page.contacts(0).job, 'Actor');
  assert.equal(page.contacts(0).jobDescription, 'some job description');
});
