import { test } from 'qunit';
import moduleForAcceptance from 'refactoring-to-page-objects/tests/helpers/module-for-acceptance';
import page from 'refactoring-to-page-objects/tests/pages/contacts';

moduleForAcceptance('Acceptance | contacts', {
  beforeEach() {
    server.create('contact', { firstName: 'Erica', lastName: 'Johnson' });
    server.create('contact', { firstName: 'Eric', lastName: 'Koston' });
    server.create('contact', { firstName: 'Wayne', lastName: 'Gretzky' });
  }
});

test('visiting /contacts shows 10 contacts', function(assert) {
  visit('/contacts');
  andThen(() => {
    assert.equal(find('[data-test="contact"]').length, 3);
  });
});

test('visiting /contacts shows 10 contacts', function(assert) {
  page.visit();
  andThen(() => {
    assert.equal(page.contacts().count, 3);
  });
});

test('typing into the search box filters the list of contacts', function(assert) {
  visit('/contacts');
  fillIn('#contact-search', 'Eric');
  andThen(() => {
    assert.equal(find('[data-test="contact"]').length, 2);
    assert.equal(find('[data-test="contact"]:eq(0) h3').text().trim(), 'Erica Johnson');
    assert.equal(find('[data-test="contact"]:eq(1) h3').text().trim(), 'Eric Koston');
  });
});

test('typing into the search box filters the list of contacts', function(assert) {
  page
    .visit()
    .fillInSearchInputWith('Eric');

  andThen(() => {
    assert.equal(page.contacts().count, 2);
    assert.equal(page.contacts(0).fullName, 'Erica Johnson');
    assert.equal(page.contacts(1).fullName, 'Eric Koston');
  });
});
